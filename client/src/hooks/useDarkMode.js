import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode() {
  const [darkValue, setDarkValue] = useLocalStorage("darkMode");

  useEffect(() => {
    const body = window.document.body;
    if (darkValue) {
      body.classList.add("use-darkmode");
    } else {
      body.classList.remove("use-darkmode");
    }
  }, [darkValue]);

    return [darkValue, setDarkValue];
}

