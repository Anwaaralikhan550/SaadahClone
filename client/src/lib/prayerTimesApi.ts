export interface PrayerTimesData {
  date: string;
  fajr: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
  sunrise?: string;
  hijriDate?: {
    date: string;
    format: string;
    day: string;
    weekday: {
      en: string;
      ar: string;
    };
    month: {
      number: number;
      en: string;
      ar: string;
    };
    year: string;
    designation: {
      abbreviated: string;
      expanded: string;
    };
  };
  location?: {
    city: string;
    country: string;
    latitude: number;
    longitude: number;
  };
}

export interface LocationData {
  latitude: number;
  longitude: number;
  city?: string;
  country?: string;
}

export async function getCurrentLocation(): Promise<LocationData> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by this browser'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        
        // Get city name from coordinates using reverse geocoding
        try {
          const response = await fetch(
            `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=2`
          );
          
          if (response.ok) {
            const data = await response.json();
            resolve({
              latitude,
              longitude,
              city: data.data?.meta?.timezone || 'Unknown',
              country: 'Unknown'
            });
          } else {
            resolve({ latitude, longitude });
          }
        } catch (error) {
          resolve({ latitude, longitude });
        }
      },
      (error) => {
        reject(new Error(`Geolocation error: ${error.message}`));
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000 // Cache for 5 minutes
      }
    );
  });
}

export async function fetchPrayerTimesByLocation(location: LocationData): Promise<PrayerTimesData> {
  try {
    const { latitude, longitude } = location;
    const url = `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=2`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.code !== 200 || !data.data) {
      throw new Error('Invalid response from prayer times API');
    }
    
    const timings = data.data.timings;
    const date = data.data.date;
    
    return {
      date: date.readable,
      fajr: formatTime(timings.Fajr),
      dhuhr: formatTime(timings.Dhuhr),
      asr: formatTime(timings.Asr),
      maghrib: formatTime(timings.Maghrib),
      isha: formatTime(timings.Isha),
      sunrise: formatTime(timings.Sunrise),
      hijriDate: date.hijri,
      location: {
        city: location.city || 'Unknown',
        country: location.country || 'Unknown',
        latitude,
        longitude
      }
    };
  } catch (error) {
    console.error('Error fetching prayer times:', error);
    throw error;
  }
}

export async function fetchPrayerTimesByCity(city: string): Promise<PrayerTimesData> {
  try {
    const url = `https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(city)}&method=2`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.code !== 200 || !data.data) {
      throw new Error('Invalid response from prayer times API');
    }
    
    const timings = data.data.timings;
    const date = data.data.date;
    const meta = data.data.meta;
    
    return {
      date: date.readable,
      fajr: formatTime(timings.Fajr),
      dhuhr: formatTime(timings.Dhuhr),
      asr: formatTime(timings.Asr),
      maghrib: formatTime(timings.Maghrib),
      isha: formatTime(timings.Isha),
      sunrise: formatTime(timings.Sunrise),
      hijriDate: date.hijri,
      location: {
        city: city,
        country: meta.country || 'Unknown',
        latitude: parseFloat(meta.latitude) || 0,
        longitude: parseFloat(meta.longitude) || 0
      }
    };
  } catch (error) {
    console.error('Error fetching prayer times by city:', error);
    throw error;
  }
}

export async function fetchPrayerTimes(): Promise<PrayerTimesData> {
  try {
    // Try to get current location first
    const location = await getCurrentLocation();
    return await fetchPrayerTimesByLocation(location);
  } catch (error) {
    console.warn('Could not get current location, using default location (Mecca)');
    // Fallback to Mecca if geolocation fails
    return await fetchPrayerTimesByCity('Mecca');
  }
}

function formatTime(time24: string): string {
  // Convert 24-hour format to 12-hour format
  const [hours, minutes] = time24.split(':');
  const hour24 = parseInt(hours);
  const hour12 = hour24 === 0 ? 12 : hour24 > 12 ? hour24 - 12 : hour24;
  const period = hour24 >= 12 ? 'PM' : 'AM';
  
  return `${hour12}:${minutes} ${period}`;
}

export function getNextPrayer(prayerTimes: PrayerTimesData): { name: string; time: string; timeUntil: string; minutesUntil: number } | null {
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes();
  
  const prayers = [
    { name: "Fajr", time: prayerTimes.fajr },
    { name: "Dhuhr", time: prayerTimes.dhuhr },
    { name: "Asr", time: prayerTimes.asr },
    { name: "Maghrib", time: prayerTimes.maghrib },
    { name: "Isha", time: prayerTimes.isha },
  ];
  
  for (const prayer of prayers) {
    const [time, period] = prayer.time.split(" ");
    const [hours, minutes] = time.split(":").map(Number);
    let prayerMinutes = hours * 60 + minutes;
    
    if (period === "PM" && hours !== 12) {
      prayerMinutes += 12 * 60;
    } else if (period === "AM" && hours === 12) {
      prayerMinutes = minutes;
    }
    
    if (prayerMinutes > currentTime) {
      const minutesUntil = prayerMinutes - currentTime;
      const hoursUntil = Math.floor(minutesUntil / 60);
      const remainingMinutes = minutesUntil % 60;
      
      let timeUntil = '';
      if (hoursUntil > 0) {
        timeUntil = `${hoursUntil}h ${remainingMinutes}m`;
      } else {
        timeUntil = `${remainingMinutes}m`;
      }
      
      return {
        name: prayer.name,
        time: prayer.time,
        timeUntil,
        minutesUntil
      };
    }
  }
  
  // If no prayer is found for today, return tomorrow's Fajr
  const minutesUntilTomorrow = (24 * 60) - currentTime;
  const fajrTime = prayers[0].time.split(" ");
  const [fajrHours, fajrMinutes] = fajrTime[0].split(":").map(Number);
  let tomorrowFajrMinutes = fajrHours * 60 + fajrMinutes;
  
  if (fajrTime[1] === "PM" && fajrHours !== 12) {
    tomorrowFajrMinutes += 12 * 60;
  } else if (fajrTime[1] === "AM" && fajrHours === 12) {
    tomorrowFajrMinutes = fajrMinutes;
  }
  
  const totalMinutesUntil = minutesUntilTomorrow + tomorrowFajrMinutes;
  const hoursUntil = Math.floor(totalMinutesUntil / 60);
  const remainingMinutes = totalMinutesUntil % 60;
  
  return {
    name: "Fajr",
    time: prayerTimes.fajr,
    timeUntil: `${hoursUntil}h ${remainingMinutes}m`,
    minutesUntil: totalMinutesUntil
  };
}

export function shouldShowAlert(minutesUntil: number): boolean {
  // Show alert when prayer is approaching (10, 5, 1 minute before)
  return minutesUntil <= 10 && minutesUntil > 0;
}

export function getAlertMessage(prayerName: string, minutesUntil: number): string {
  if (minutesUntil <= 1) {
    return `${prayerName} prayer time is now!`;
  } else if (minutesUntil <= 5) {
    return `${prayerName} prayer is approaching in ${minutesUntil} minute${minutesUntil > 1 ? 's' : ''}!`;
  } else {
    return `${prayerName} prayer is approaching in ${minutesUntil} minutes.`;
  }
}

// Notification functions
export function requestNotificationPermission(): Promise<NotificationPermission> {
  if (!('Notification' in window)) {
    return Promise.reject(new Error('This browser does not support notifications'));
  }
  
  return Notification.requestPermission();
}

export function showPrayerNotification(prayerName: string, minutesUntil: number): void {
  if (Notification.permission === 'granted') {
    const message = getAlertMessage(prayerName, minutesUntil);
    
    new Notification('Prayer Time Reminder', {
      body: message,
      icon: '/favicon.ico',
      tag: 'prayer-reminder',
      requireInteraction: false,
      silent: false
    });
  }
}

// Audio alert function
export function playAlertSound(): void {
  try {
    // Create a simple tone for prayer alert
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  } catch (error) {
    console.warn('Could not play alert sound:', error);
  }
}
