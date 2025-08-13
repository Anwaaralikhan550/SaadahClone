export interface PrayerTimesData {
  date: string;
  fajr: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
  sunrise?: string;
}

export async function fetchPrayerTimes(): Promise<PrayerTimesData> {
  // In a real implementation, this would call an Islamic prayer times API
  // For now, return default times
  const today = new Date().toISOString().split('T')[0];
  
  return {
    date: today,
    fajr: "5:15 AM",
    dhuhr: "12:30 PM",
    asr: "3:45 PM",
    maghrib: "6:20 PM",
    isha: "7:45 PM",
    sunrise: "6:45 AM"
  };
}

export function getNextPrayer(prayerTimes: PrayerTimesData): { name: string; time: string } | null {
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
      return prayer;
    }
  }
  
  // If no prayer is found for today, return tomorrow's Fajr
  return { name: "Fajr", time: prayerTimes.fajr };
}
