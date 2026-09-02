export interface IntersectionObserverArgs extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export type DeviceType = "mobile" | "tablet" | "desktop" | null;

export interface MediaQueryState {
  device: DeviceType;
  width: number | undefined;
  height: number | undefined;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}
