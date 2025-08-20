import { useEffect } from 'react';
import { useLocation } from 'wouter';

export function useScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    // Scroll to top immediately when location changes (no smooth scrolling to prevent issues)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location]);
}