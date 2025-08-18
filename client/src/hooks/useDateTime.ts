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

export const useHijriDate = () => {
  const [hijriDate, setHijriDate] = useState<string>('Loading...');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchHijriDate = async () => {
      try {
        // Get current Gregorian date
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        
        // Fetch from Aladhan API
        const response = await fetch(
          `https://api.aladhan.com/v1/gToH/${day}-${month}-${year}`,
          {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
            }
          }
        );

        if (!response.ok) {
          throw new Error(`API request failed: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.code === 200 && data.data) {
          const hijri: HijriDate = data.data.hijri;
          const formattedDate = `${hijri.day} ${hijri.month.en} ${hijri.year} AH`;
          setHijriDate(formattedDate);
          setError('');
        } else {
          throw new Error('Invalid API response format');
        }
      } catch (err) {
        console.error('Error fetching Hijri date:', err);
        setError('Unable to fetch Islamic date');
        // Fallback to showing current Gregorian date
        const today = new Date();
        const fallback = `${String(today.getDate()).padStart(2, '0')}-${String(today.getMonth() + 1).padStart(2, '0')}-${today.getFullYear()}`;
        setHijriDate(fallback);
      }
    };

    // Fetch immediately
    fetchHijriDate();

    // Check for updates every hour (in case date changes during the day)
    const interval = setInterval(fetchHijriDate, 60 * 60 * 1000);

    // Also check at midnight for date changes
    const now = new Date();
    const millisecondsUntilMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0).getTime() - now.getTime();
    
    const midnightTimeout = setTimeout(() => {
      fetchHijriDate();
      // Set up daily interval after midnight
      const dailyInterval = setInterval(fetchHijriDate, 24 * 60 * 60 * 1000);
      return () => clearInterval(dailyInterval);
    }, millisecondsUntilMidnight);

    // Cleanup intervals and timeout on unmount
    return () => {
      clearInterval(interval);
      clearTimeout(midnightTimeout);
    };
  }, []);

  return { hijriDate, error };
};