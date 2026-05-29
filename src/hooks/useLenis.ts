import { useEffect } from "react";
import Lenis from "lenis";

declare global {
  interface Window {
    lenisInstance?: Lenis;
  }
}

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easing
      wheelMultiplier: 1.2,
      touchMultiplier: 2,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);
    window.lenisInstance = lenis;

    // Pulse a standard scroll indicator tracker if wanted
    const handleScroll = () => {
      if (lenis.scroll > 50) {
        document.body.classList.add("scrolled");
      } else {
        document.body.classList.remove("scrolled");
      }
    };
    lenis.on("scroll", handleScroll);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.off("scroll", handleScroll);
      lenis.destroy();
      window.lenisInstance = undefined;
    };
  }, []);
}
