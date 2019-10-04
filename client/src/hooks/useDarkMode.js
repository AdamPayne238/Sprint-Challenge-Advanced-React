import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode() {
  const [darkValue, setDarkValue] = useLocalStorage("darkMode");

  useEffect(() => {
    const body = window.document.body;
    if (darkValue) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [darkValue]);

    return [darkValue, setDarkValue];
}

