import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
    if (typeof window !== "undefined") {
      try {
        // Anti-pattern fix: some people might pass a React event directly to the setter
        if (value && typeof value === 'object' && ('nativeEvent' in value || 'target' in value)) {
          return;
        }
        
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (e) {
        console.warn("useLocalStorage serialization failed, likely circular structure:", e);
      }
    }
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}
