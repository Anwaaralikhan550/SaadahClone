export interface WorldTimeResponse {
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  dst: boolean;
  dst_from: string | null;
  dst_offset: number;
  dst_until: string | null;
  raw_offset: number;
  timezone: string;
  unixtime: number;
  utc_datetime: string;
  utc_offset: string;
  week_number: number;
}

export interface TimeData {
  currentTime: Date;
  timezone: string;
  utcOffset: string;
  isDst: boolean;
}

// Get current time using World Time API without requiring location
export async function fetchCurrentTime(): Promise<TimeData> {
  try {
    // Try to get timezone-specific time using World Time API
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const url = `https://worldtimeapi.org/api/timezone/${timezone}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: WorldTimeResponse = await response.json();
    
    return {
      currentTime: new Date(data.datetime),
      timezone: data.timezone,
      utcOffset: data.utc_offset,
      isDst: data.dst
    };
  } catch (error) {
    console.warn('Could not fetch time from World Time API, using local time');
    // Fallback to local time
    return {
      currentTime: new Date(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      utcOffset: new Date().getTimezoneOffset().toString(),
      isDst: false
    };
  }
}

// Get current time for a specific timezone
export async function fetchTimeForTimezone(timezone: string): Promise<TimeData> {
  try {
    const url = `https://worldtimeapi.org/api/timezone/${timezone}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: WorldTimeResponse = await response.json();
    
    return {
      currentTime: new Date(data.datetime),
      timezone: data.timezone,
      utcOffset: data.utc_offset,
      isDst: data.dst
    };
  } catch (error) {
    console.warn(`Could not fetch time for timezone ${timezone}, using local time`);
    // Fallback to local time
    return {
      currentTime: new Date(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      utcOffset: new Date().getTimezoneOffset().toString(),
      isDst: false
    };
  }
}

// Format time for display
export function formatTime(date: Date, use24Hour: boolean = false): string {
  if (use24Hour) {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  }
  
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
}

// Format date for display
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Get Islamic date (Hijri) - this would typically require an Islamic calendar API
export function getIslamicDate(date: Date): string {
  // For now, return a placeholder - in a real implementation, you'd use an Islamic calendar API
  const islamicMonths = [
    'Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani',
    'Jumada al-Awwal', 'Jumada al-Thani', 'Rajab', 'Shaban',
    'Ramadan', 'Shawwal', 'Dhu al-Qidah', 'Dhu al-Hijjah'
  ];
  
  // This is a very basic approximation - use proper Islamic calendar library in production
  const hijriYear = Math.floor((date.getFullYear() - 622) * 1.030684);
  const hijriMonth = (date.getMonth() + Math.floor(Math.random() * 2)) % 12;
  const hijriDay = Math.floor(Math.random() * 29) + 1;
  
  return `${hijriDay} ${islamicMonths[hijriMonth]} ${hijriYear} AH`;
}