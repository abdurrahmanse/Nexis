import { DeviceType, MediaQueryState } from "@/types/hooks.types";
import { useCallback, useSyncExternalStore } from "react";

const getServerSnapshot = (): MediaQueryState => ({
  device: null,
  width: undefined,
  height: undefined,
  isMobile: false,
  isTablet: false,
  isDesktop: false,
});

// Cache reference to prevent unnecessary re-renders
let cachedState: MediaQueryState | null = null;

const getSnapshot = (): MediaQueryState => {
  if (typeof window === "undefined") return getServerSnapshot();

  const width = window.innerWidth;
  const height = window.innerHeight;
  let device: DeviceType = "desktop";
  
  if (window.matchMedia("(max-width: 640px)").matches) {
    device = "mobile";
  } else if (window.matchMedia("(min-width: 641px) and (max-width: 1024px)").matches) {
    device = "tablet";
  }

  if (
    cachedState &&
    cachedState.width === width &&
    cachedState.height === height &&
    cachedState.device === device
  ) {
    return cachedState;
  }

  cachedState = {
    device,
    width,
    height,
    isMobile: device === "mobile",
    isTablet: device === "tablet",
    isDesktop: device === "desktop",
  };
  return cachedState;
};

export default function useMediaQuery() {
  const subscribe = useCallback((callback: () => void) => {
    if (typeof window === "undefined") return () => {};
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(callback, 150);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
