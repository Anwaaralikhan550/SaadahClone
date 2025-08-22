import { useEffect } from 'react';
import { useRouter } from 'next/router';

export function useScrollToTop() {
  const router = useRouter();
  
  useEffect(() => {
    // Scroll to top immediately when location changes (no smooth scrolling to prevent issues)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [router.asPath]);
}