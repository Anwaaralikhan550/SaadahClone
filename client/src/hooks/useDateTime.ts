import { useState, useEffect } from 'react';

interface HijriDate {
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
}

interface ShamsiDate {
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
}

export const useIslamicCalendar = () => {
  const [hijriDate, setHijriDate] = useState<string>('Loading...');
  const [shamsiDate, setShamsiDate] = useState<string>('Loading...');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchIslamicDates = async () => {
      try {
        // Get current Gregorian date
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        
        // Fetch Hijri date from Aladhan API
        const hijriResponse = await fetch(
          `https://api.aladhan.com/v1/gToH/${day}-${month}-${year}`,
          {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
            }
          }
        );

        if (!hijriResponse.ok) {
          throw new Error(`Hijri API request failed: ${hijriResponse.status}`);
        }

        const hijriData = await hijriResponse.json();
        
        if (hijriData.code === 200 && hijriData.data) {
          const hijri: HijriDate = hijriData.data.hijri;
          const formattedHijriDate = `${hijri.day} ${hijri.month.en} ${hijri.year} AH`;
          setHijriDate(formattedHijriDate);
        } else {
          throw new Error('Invalid Hijri API response format');
        }

        // Calculate Shamsi/Persian date using a conversion algorithm
        const shamsiDateCalc = gregorianToPersian(parseInt(year), parseInt(month), parseInt(day));
        const persianMonths = [
          'Farvardin', 'Ordibehesht', 'Khordad', 'Tir', 
          'Mordad', 'Shahrivar', 'Mehr', 'Aban', 
          'Azar', 'Dey', 'Bahman', 'Esfand'
        ];
        
        const formattedShamsiDate = `${shamsiDateCalc.day} ${persianMonths[shamsiDateCalc.month - 1]} ${shamsiDateCalc.year} SH`;
        setShamsiDate(formattedShamsiDate);
        setError('');
      } catch (err) {
        console.error('Error fetching Islamic calendar dates:', err);
        setError('Unable to fetch Islamic calendar dates');
        // Fallback to showing current Gregorian date
        const today = new Date();
        const fallback = `${String(today.getDate()).padStart(2, '0')}-${String(today.getMonth() + 1).padStart(2, '0')}-${today.getFullYear()}`;
        setHijriDate(fallback);
        setShamsiDate(fallback);
      }
    };

    // Fetch immediately
    fetchIslamicDates();

    // Check for updates every hour (in case date changes during the day)
    const interval = setInterval(fetchIslamicDates, 60 * 60 * 1000);

    // Also check at midnight for date changes
    const now = new Date();
    const millisecondsUntilMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0).getTime() - now.getTime();
    
    const midnightTimeout = setTimeout(() => {
      fetchIslamicDates();
      // Set up daily interval after midnight
      const dailyInterval = setInterval(fetchIslamicDates, 24 * 60 * 60 * 1000);
      return () => clearInterval(dailyInterval);
    }, millisecondsUntilMidnight);

    // Cleanup intervals and timeout on unmount
    return () => {
      clearInterval(interval);
      clearTimeout(midnightTimeout);
    };
  }, []);

  return { hijriDate, shamsiDate, error };
};

// Persian/Shamsi date conversion algorithm
function gregorianToPersian(gy: number, gm: number, gd: number): { year: number; month: number; day: number } {
  const g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  
  let jy: number;
  if (gy <= 1600) {
    jy = 0;
    gy -= 621;
  } else {
    jy = 979;
    gy -= 1600;
  }

  const gy2 = (gm > 2) ? (gy + 1) : gy;

  let days = Math.floor((365 * gy) + ((gy2 + 3) / 4) + g_d_m[gm - 1] + gd - 80 + (gy2 / 100) - (gy2 / 400) - 150);

  jy = -14 + 33 * Math.floor(days / 12053);
  days %= 12053;

  let jp = Math.floor(days / 365);
  if (jp >= 29) {
    jp = 29;
    days = 365;
  }

  if (jp >= 0) {
    jy += jp;
    days -= jp * 365;
  }

  let jm: number;
  let jd: number;
  
  if (days < 186) {
    jm = 1 + Math.floor(days / 31);
    jd = 1 + (days % 31);
  } else {
    jm = 7 + Math.floor((days - 186) / 30);
    jd = 1 + ((days - 186) % 30);
  }
  
  return { year: jy, month: jm, day: jd };
}