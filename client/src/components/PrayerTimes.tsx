import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Clock, Bell, Calendar, Sunrise, MapPin, Settings, 
  Volume2, VolumeX, RefreshCw, Search, AlertTriangle, CheckCircle
} from "lucide-react";
import { usePrayerTimes } from "@/hooks/usePrayerTimes";
import { 
  getNextPrayer, 
  shouldShowAlert, 
  getAlertMessage,
  requestNotificationPermission,
  showPrayerNotification,
  playAlertSound,
  getCurrentLocation,
  fetchPrayerTimesByCity,
  type LocationData,
  type PrayerTimesData
} from "@/lib/prayerTimesApi";
import { useEffect, useState, useCallback, useMemo } from "react";

interface PrayerTimesProps {
  compact?: boolean;
  showNextPrayer?: boolean;
  className?: string;
  enableAlerts?: boolean;
  showHijriDate?: boolean;
  allowLocationChange?: boolean;
}

interface AlertState {
  isEnabled: boolean;
  soundEnabled: boolean;
  notificationEnabled: boolean;
  lastAlertTime?: number;
}

export default function PrayerTimes({ 
  compact = false, 
  showNextPrayer = true, 
  className = "",
  enableAlerts = true,
  showHijriDate = true,
  allowLocationChange = true
}: PrayerTimesProps) {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [customCity, setCustomCity] = useState<string>("");
  const [cityInput, setCityInput] = useState<string>("");
  const [isSearching, setIsSearching] = useState(false);
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);
  const [alertState, setAlertState] = useState<AlertState>({
    isEnabled: enableAlerts,
    soundEnabled: false,
    notificationEnabled: false
  });
  const [currentTime, setCurrentTime] = useState(new Date());
  const [lastAlertedPrayer, setLastAlertedPrayer] = useState<string | null>(null);
  const [showLocationSettings, setShowLocationSettings] = useState(false);

  // Use the appropriate prayer times based on current settings
  const prayerTimesQuery = usePrayerTimes({
    location: useCurrentLocation ? location || undefined : undefined,
    city: !useCurrentLocation && customCity ? customCity : undefined,
    autoUpdate: true
  });
  
  const { data: prayerTimes, isLoading, error, refresh } = prayerTimesQuery;

  // Update current time every second for live clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Initialize with timezone-based location (no user permission required)
  useEffect(() => {
    if (useCurrentLocation && !location) {
      // Don't request location permission, just use timezone-based approach
      setUseCurrentLocation(false);
      setCustomCity(''); // This will trigger timezone-based fallback
    }
  }, [useCurrentLocation, location]);

  // Request notification permission when alerts are enabled
  useEffect(() => {
    if (alertState.isEnabled && !alertState.notificationEnabled) {
      requestNotificationPermission()
        .then((permission) => {
          setAlertState(prev => ({
            ...prev,
            notificationEnabled: permission === 'granted'
          }));
        })
        .catch(() => {
          console.warn('Notification permission denied');
        });
    }
  }, [alertState.isEnabled, alertState.notificationEnabled]);

  // Calculate next prayer and handle alerts
  const nextPrayer = useMemo(() => {
    if (!prayerTimes) return null;
    return getNextPrayer(prayerTimes);
  }, [prayerTimes, currentTime]);

  // Handle prayer alerts
  useEffect(() => {
    if (!nextPrayer || !alertState.isEnabled) return;

    const { name, minutesUntil } = nextPrayer;
    const shouldAlert = shouldShowAlert(minutesUntil);
    const alertKey = `${name}-${Math.floor(minutesUntil)}`;

    if (shouldAlert && lastAlertedPrayer !== alertKey) {
      setLastAlertedPrayer(alertKey);
      
      // Show notification
      if (alertState.notificationEnabled) {
        showPrayerNotification(name, minutesUntil);
      }
      
      // Play sound
      if (alertState.soundEnabled) {
        playAlertSound();
      }
    }
  }, [nextPrayer, alertState, lastAlertedPrayer]);

  // Handle city search
  const handleCitySearch = useCallback(async () => {
    if (!cityInput.trim()) return;
    
    setIsSearching(true);
    try {
      await fetchPrayerTimesByCity(cityInput.trim());
      setCustomCity(cityInput.trim());
      setUseCurrentLocation(false);
      setCityInput("");
      setShowLocationSettings(false);
    } catch (error) {
      console.error('Failed to fetch prayer times for city:', error);
    } finally {
      setIsSearching(false);
    }
  }, [cityInput]);

  // Format Hijri date for display
  const formatHijriDate = useCallback((hijriDate: any): string | null => {
    if (!hijriDate || typeof hijriDate !== 'object') return null;
    try {
      const day = hijriDate.day || '';
      const month = hijriDate.month?.en || '';
      const year = hijriDate.year || '';
      const designation = hijriDate.designation?.abbreviated || '';
      
      if (!day || !month || !year) return null;
      
      return `${day} ${month} ${year} ${designation}`.trim();
    } catch {
      return null;
    }
  }, []);

  // Current location display
  const locationDisplay = useMemo(() => {
    if (useCurrentLocation && prayerTimes?.location) {
      return `${prayerTimes.location.city}, ${prayerTimes.location.country}`;
    } else if (customCity) {
      return customCity;
    }
    return 'Unknown Location';
  }, [useCurrentLocation, prayerTimes?.location, customCity]);

  const prayerList = useMemo(() => [
    { 
      key: "fajr", 
      label: "Fajr", 
      labelAr: "الفجر", 
      icon: Sunrise,
      color: "text-blue-600 dark:text-blue-400"
    },
    { 
      key: "dhuhr", 
      label: "Dhuhr", 
      labelAr: "الظهر", 
      icon: Clock,
      color: "text-yellow-600 dark:text-yellow-400"
    },
    { 
      key: "asr", 
      label: "Asr", 
      labelAr: "العصر", 
      icon: Clock,
      color: "text-orange-600 dark:text-orange-400"
    },
    { 
      key: "maghrib", 
      label: "Maghrib", 
      labelAr: "المغرب", 
      icon: Clock,
      color: "text-red-600 dark:text-red-400"
    },
    { 
      key: "isha", 
      label: "Isha", 
      labelAr: "العشاء", 
      icon: Clock,
      color: "text-purple-600 dark:text-purple-400"
    },
  ], []);

  if (error) {
    return (
      <Card className={`bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 ${className}`}>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-red-600 dark:text-red-400">
              <AlertTriangle className="mr-2 h-4 w-4" />
              <span className="text-sm">Unable to load prayer times</span>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={refresh}
              className="text-red-600 dark:text-red-400 border-red-300 dark:border-red-700"
            >
              <RefreshCw className="h-3 w-3 mr-1" />
              Retry
            </Button>
          </div>
          {allowLocationChange && (
            <div className="mt-3 pt-3 border-t border-red-200 dark:border-red-700">
              <div className="flex gap-2">
                <Input
                  placeholder="Enter city name..."
                  value={cityInput}
                  onChange={(e) => setCityInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleCitySearch()}
                  className="flex-1"
                />
                <Button onClick={handleCitySearch} disabled={isSearching}>
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  }

  if (compact) {
    return (
      <Card className={`bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-lg text-gray-900 dark:text-gray-100 ${className}`}>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center">
              <Clock className="text-islamic-green mr-2 h-4 w-4" />
              Prayer Times
            </h3>
            {nextPrayer && (
              <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                {nextPrayer.name} in {nextPrayer.timeUntil}
              </div>
            )}
          </div>
          
          {/* Current Time Display */}
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-3 text-center">
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </div>
          
          {isLoading ? (
            <div className="space-y-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-12 animate-pulse"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-16 animate-pulse"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-1 text-xs">
              {prayerList.map((prayer) => {
                const isNext = nextPrayer?.name === prayer.label;
                return (
                  <motion.div 
                    key={prayer.key} 
                    className={`flex justify-between items-center p-1 rounded transition-colors ${
                      isNext ? 'bg-green-50 dark:bg-green-900/20' : ''
                    }`}
                    animate={isNext ? { scale: [1, 1.02, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    data-testid={`prayer-time-${prayer.key}`}
                  >
                    <span className="text-gray-600 dark:text-gray-400 flex items-center">
                      <prayer.icon className={`h-3 w-3 mr-1 ${prayer.color}`} />
                      {prayer.label}
                    </span>
                    <span className={`font-medium ${
                      isNext 
                        ? 'text-green-600 dark:text-green-400' 
                        : 'text-gray-900 dark:text-white'
                    }`}>
                      {(prayerTimes?.[prayer.key as keyof PrayerTimesData] as string) || "--:--"}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          )}
          
          {/* Location and Hijri Date */}
          {prayerTimes && (
            <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700 space-y-1">
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                <MapPin className="h-3 w-3 mr-1" />
                <span className="truncate">{locationDisplay}</span>
              </div>
              {showHijriDate && prayerTimes.hijriDate && (() => {
                const formattedDate = formatHijriDate(prayerTimes.hijriDate);
                return formattedDate ? (
                  <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    {formattedDate}
                  </div>
                ) : null;
              })()}
            </div>
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <div className={className}>
      {/* Alert Banner */}
      <AnimatePresence>
        {nextPrayer && shouldShowAlert(nextPrayer.minutesUntil) && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="mb-4"
          >
            <Alert className="border-orange-200 bg-orange-50 dark:bg-orange-900/20 dark:border-orange-800">
              <Bell className="h-4 w-4 text-orange-600 dark:text-orange-400" />
              <AlertDescription className="text-orange-800 dark:text-orange-200 font-medium">
                {getAlertMessage(nextPrayer.name, nextPrayer.minutesUntil)}
              </AlertDescription>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Current Time and Location Header */}
      <Card className="mb-4">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="text-center flex-1">
              <div className="text-2xl font-bold text-gray-900 dark:text-white font-mono">
                {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {currentTime.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
              {showHijriDate && prayerTimes?.hijriDate && (() => {
                const formattedDate = formatHijriDate(prayerTimes.hijriDate);
                return formattedDate ? (
                  <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                    {formattedDate}
                  </div>
                ) : null;
              })()}
            </div>
            
            {allowLocationChange && (
              <div className="flex flex-col items-end">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowLocationSettings(!showLocationSettings)}
                  className="text-gray-600 dark:text-gray-400"
                >
                  <Settings className="h-4 w-4 mr-1" />
                  Settings
                </Button>
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span className="truncate max-w-[150px]">{locationDisplay}</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Settings Panel */}
      <AnimatePresence>
        {showLocationSettings && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-4"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Prayer Times Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Location Settings */}
                <div>
                  <h4 className="font-medium mb-2">Location</h4>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter city name..."
                        value={cityInput}
                        onChange={(e) => setCityInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleCitySearch()}
                        className="flex-1"
                      />
                      <Button onClick={handleCitySearch} disabled={isSearching}>
                        {isSearching ? (
                          <RefreshCw className="h-4 w-4 animate-spin" />
                        ) : (
                          <Search className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setUseCurrentLocation(true);
                        setCustomCity("");
                        setLocation(null);
                      }}
                      disabled={isLoading}
                      className="w-full"
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      Use Current Location
                    </Button>
                  </div>
                </div>
                
                {/* Alert Settings */}
                {enableAlerts && (
                  <div>
                    <h4 className="font-medium mb-2">Alerts</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Prayer Notifications</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setAlertState(prev => ({ ...prev, notificationEnabled: !prev.notificationEnabled }))}
                          className={alertState.notificationEnabled ? "text-green-600" : "text-gray-600"}
                        >
                          {alertState.notificationEnabled ? <CheckCircle className="h-4 w-4" /> : <Bell className="h-4 w-4" />}
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Sound Alerts</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setAlertState(prev => ({ ...prev, soundEnabled: !prev.soundEnabled }))}
                          className={alertState.soundEnabled ? "text-green-600" : "text-gray-600"}
                        >
                          {alertState.soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Next Prayer Highlight */}
      {showNextPrayer && nextPrayer && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4"
        >
          <Card className="gradient-primary text-white shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Next Prayer</h3>
                  <p className="text-sm opacity-90">{nextPrayer.name} at {nextPrayer.time}</p>
                  <p className="text-xs opacity-75">in {nextPrayer.timeUntil}</p>
                </div>
                <div className="text-right">
                  <Bell className="h-8 w-8 mb-2" />
                  <div className="text-xs opacity-75">
                    {nextPrayer.minutesUntil} min
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Full Prayer Times */}
      <Card className="bg-gray-50 dark:bg-gray-800 transition-colors duration-300 text-gray-900 dark:text-gray-100">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
              <Clock className="text-islamic-green mr-3 h-5 w-5" />
              Today's Prayer Times
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={refresh}
              disabled={isLoading}
              className="text-gray-600 dark:text-gray-400"
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
            </Button>
          </div>
          
          {isLoading ? (
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex justify-between items-center p-3 rounded-lg">
                  <div className="flex items-center">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-6 mr-3 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse"></div>
                  </div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20 animate-pulse"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {prayerList.map((prayer, index) => {
                const isNext = nextPrayer?.name === prayer.label;
                const isPast = nextPrayer && prayerTimes && (() => {
                  const currentPrayerTime = prayerTimes[prayer.key as keyof PrayerTimesData];
                  const nextPrayerTime = nextPrayer.time;
                  return currentPrayerTime !== nextPrayerTime && nextPrayer.name !== prayer.label;
                })();
                
                return (
                  <motion.div
                    key={prayer.key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`flex justify-between items-center p-4 rounded-lg transition-all duration-300 ${
                      isNext 
                        ? 'bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 border-l-4 border-green-500' 
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700/70'
                    }`}
                    data-testid={`prayer-time-full-${prayer.key}`}
                  >
                    <div className="flex items-center">
                      <prayer.icon className={`mr-3 h-5 w-5 ${prayer.color}`} />
                      <div>
                        <span className={`font-medium text-lg ${
                          isNext ? 'text-green-700 dark:text-green-300' : 'text-gray-900 dark:text-white'
                        }`}>
                          {prayer.label}
                        </span>
                        <div className="text-sm text-gray-500 dark:text-gray-400 font-arabic">
                          {prayer.labelAr}
                        </div>
                        {isNext && nextPrayer && (
                          <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                            in {nextPrayer.timeUntil}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`font-bold text-xl ${
                        isNext 
                          ? 'text-green-700 dark:text-green-300' 
                          : 'text-gray-900 dark:text-white'
                      }`}>
                        {(prayerTimes?.[prayer.key as keyof PrayerTimesData] as string) || "--:--"}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* Additional Info */}
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{currentTime.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}</span>
              </div>
              
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                <span className="truncate">{locationDisplay}</span>
              </div>
              
              {prayerTimes?.sunrise && (
                <div className="flex items-center">
                  <Sunrise className="mr-2 h-4 w-4 text-yellow-500" />
                  <span>Sunrise: {prayerTimes.sunrise}</span>
                </div>
              )}
              
              {enableAlerts && (
                <div className="flex items-center">
                  <Bell className={`mr-2 h-4 w-4 ${
                    alertState.isEnabled ? 'text-green-500' : 'text-gray-400'
                  }`} />
                  <span>Alerts: {alertState.isEnabled ? 'On' : 'Off'}</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
