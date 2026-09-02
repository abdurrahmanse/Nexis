import { RefObject, useCallback, useRef, useSyncExternalStore } from "react";

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export default function useIntersectionObserver(
  elementRef: RefObject<Element>,
  {
    threshold = 0,
    root = null,
    rootMargin = "0%",
    freezeOnceVisible = false,
  }: Args
): IntersectionObserverEntry | undefined {
  const entryRef = useRef<IntersectionObserverEntry | undefined>(undefined);

  const getSnapshot = useCallback(() => entryRef.current, []);
  const getServerSnapshot = useCallback(() => undefined, []);

  const subscribe = useCallback(
    (callback: () => void) => {
      const node = elementRef?.current;
      const hasIOSupport = typeof window !== "undefined" && !!window.IntersectionObserver;

      if (!hasIOSupport || !node) return () => {};

      if (freezeOnceVisible && entryRef.current?.isIntersecting) {
        return () => {};
      }

      const observer = new IntersectionObserver(
        ([newEntry]) => {
          entryRef.current = newEntry;
          callback();

          if (freezeOnceVisible && newEntry.isIntersecting) {
            observer.disconnect();
          }
        },
        { threshold, root, rootMargin }
      );

      observer.observe(node);
      return () => observer.disconnect();
    },
    [elementRef, threshold, root, rootMargin, freezeOnceVisible]
  );

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
