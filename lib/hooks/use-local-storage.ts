import { useCallback, useSyncExternalStore } from "react";

// Cache to maintain reference equality for parsed JSON objects
const parsedCache = new Map<string, any>();

export default function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  const getSnapshot = () => {
    if (typeof window === "undefined") return JSON.stringify(initialValue);
    return window.localStorage.getItem(key) ?? JSON.stringify(initialValue);
  };

  const getServerSnapshot = () => JSON.stringify(initialValue);

  const subscribe = useCallback(
    (callback: () => void) => {
      if (typeof window === "undefined") return () => {};
      const handleStorageChange = (e: StorageEvent | Event) => {
        if (e instanceof StorageEvent && e.key !== key) return;
        callback();
      };
      window.addEventListener("storage", handleStorageChange);
      window.addEventListener("local-storage", handleStorageChange);
      return () => {
        window.removeEventListener("storage", handleStorageChange);
        window.removeEventListener("local-storage", handleStorageChange);
      };
    },
    [key]
  );

  const storeString = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  let parsedData = initialValue;
  try {
    const cached = parsedCache.get(storeString);
    if (cached !== undefined) {
      parsedData = cached;
    } else {
      parsedData = JSON.parse(storeString);
      // Keep cache small to avoid memory leaks
      if (parsedCache.size > 100) parsedCache.clear();
      parsedCache.set(storeString, parsedData);
    }
  } catch {
    parsedData = initialValue;
  }

  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        const valueToStore = value instanceof Function ? value(parsedData) : value;
        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
          window.dispatchEvent(new Event("local-storage"));
        }
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key, parsedData]
  );

  return [parsedData, setValue];
}
