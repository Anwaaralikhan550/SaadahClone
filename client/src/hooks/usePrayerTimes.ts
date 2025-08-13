import { useQuery } from "@tanstack/react-query";
import type { PrayerTimesData } from "@/lib/prayerTimesApi";

export function usePrayerTimes() {
  return useQuery<PrayerTimesData>({
    queryKey: ["/api/prayer-times/today"],
    refetchInterval: 1000 * 60 * 60, // Refetch every hour
    staleTime: 1000 * 60 * 30, // Consider data stale after 30 minutes
  });
}
