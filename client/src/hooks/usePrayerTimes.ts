import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import type { 
  PrayerTimesData, 
  LocationData, 
  fetchPrayerTimes, 
  fetchPrayerTimesByLocation, 
  fetchPrayerTimesByCity 
} from "@/lib/prayerTimesApi";

interface UsePrayerTimesOptions {
  location?: LocationData;
  city?: string;
  autoUpdate?: boolean;
}

export function usePrayerTimes(options: UsePrayerTimesOptions = {}) {
  const { location, city, autoUpdate = true } = options;
  const queryClient = useQueryClient();
  
  // Create a query key based on the location or city
  const queryKey = location 
    ? ["prayer-times", "location", location.latitude, location.longitude]
    : city
    ? ["prayer-times", "city", city]
    : ["prayer-times", "auto"];

  const query = useQuery<PrayerTimesData>({
    queryKey,
    queryFn: async () => {
      const { fetchPrayerTimes, fetchPrayerTimesByLocation, fetchPrayerTimesByCity } = await import("@/lib/prayerTimesApi");
      
      if (location) {
        return fetchPrayerTimesByLocation(location);
      } else if (city) {
        return fetchPrayerTimesByCity(city);
      } else {
        return fetchPrayerTimes();
      }
    },
    refetchInterval: autoUpdate ? 1000 * 60 * 5 : false, // Refetch every 5 minutes if auto-update is enabled
    staleTime: 1000 * 60 * 30, // Consider data stale after 30 minutes
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });

  // Auto-refresh every minute for live updates
  useEffect(() => {
    if (!autoUpdate) return;

    const interval = setInterval(() => {
      // Only invalidate to trigger a refetch if the data is stale
      queryClient.invalidateQueries({ queryKey });
    }, 1000 * 60); // Every minute

    return () => clearInterval(interval);
  }, [queryClient, queryKey, autoUpdate]);

  return {
    ...query,
    refresh: () => queryClient.invalidateQueries({ queryKey }),
  };
}

export function useLocationPrayerTimes(location: LocationData) {
  return usePrayerTimes({ location });
}

export function useCityPrayerTimes(city: string) {
  return usePrayerTimes({ city });
}
