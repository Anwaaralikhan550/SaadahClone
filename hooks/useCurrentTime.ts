import { useState, useEffect } from 'react';
import { fetchCurrentTime, type TimeData } from '@/lib/timeApi';

export function useCurrentTime() {
  const [timeData, setTimeData] = useState<TimeData>({
    currentTime: new Date(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    utcOffset: new Date().getTimezoneOffset().toString(),
    isDst: false
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch initial time data from World Time API
  useEffect(() => {
    let mounted = true;

    const fetchTime = async () => {
      try {
        setIsLoading(true);
        const data = await fetchCurrentTime();
        if (mounted) {
          setTimeData(data);
          setError(null);
        }
      } catch (err) {
        if (mounted) {
          setError('Failed to fetch time data');
          // Use local time as fallback
          setTimeData({
            currentTime: new Date(),
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            utcOffset: new Date().getTimezoneOffset().toString(),
            isDst: false
          });
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    fetchTime();

    return () => {
      mounted = false;
    };
  }, []);

  // Update time every second using local time (more efficient than API calls)
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeData(prevData => ({
        ...prevData,
        currentTime: new Date()
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Refresh from API once per hour to maintain accuracy
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const data = await fetchCurrentTime();
        setTimeData(data);
        setError(null);
      } catch (err) {
        setError('Failed to refresh time data');
      }
    }, 1000 * 60 * 60); // Every hour

    return () => clearInterval(interval);
  }, []);

  return {
    ...timeData,
    isLoading,
    error
  };
}