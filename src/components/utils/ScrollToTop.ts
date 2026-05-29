import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll instantly to 0 when routing path changes
    window.scrollTo(0, 0);
    
    // Also reset lenis if active
    if (window.lenisInstance) {
      window.lenisInstance.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return null;
}
