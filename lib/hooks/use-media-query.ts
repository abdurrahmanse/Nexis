import { useEffect, useState, useCallback } from "react";

export default function useMediaQuery() {
  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop" | null>(
    null
  );
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  const checkDevice = useCallback(() => {
    if (typeof window === "undefined") return;

    if (window.matchMedia("(max-width: 640px)").matches) {
      setDevice("mobile");
    } else if (
      window.matchMedia("(min-width: 641px) and (max-width: 1024px)").matches
    ) {
      setDevice("tablet");
    } else {
      setDevice("desktop");
    }
    
    setDimensions(prev => {
      if (prev?.width === window.innerWidth && prev?.height === window.innerHeight) {
        return prev; // bail out of render if identical
      }
      return { width: window.innerWidth, height: window.innerHeight };
    });
  }, []);

  useEffect(() => {
    checkDevice();
    
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkDevice, 150);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, [checkDevice]);

  return {
    device,
    width: dimensions?.width,
    height: dimensions?.height,
    isMobile: device === "mobile",
    isTablet: device === "tablet",
    isDesktop: device === "desktop",
  };
}
