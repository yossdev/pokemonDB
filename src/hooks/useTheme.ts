import { useEffect, useState } from "react";

function useTheme() {
  const DEFAULT = "system";
  const PREFERENCE = localStorage.getItem("theme");
  const [theme, setTheme] = useState(PREFERENCE ? PREFERENCE : DEFAULT);

  useEffect(() => {
    switch (theme) {
      case "dark":
        // Whenever the user explicitly chooses dark mode
        localStorage.theme = "dark";
        document.documentElement.classList.add("dark");
        break;
      case "light":
        // Whenever the user explicitly chooses light mode
        localStorage.theme = "light";
        document.documentElement.classList.remove("dark");
        break;
      default:
        // Whenever the user explicitly chooses to respect the OS preference
        localStorage.removeItem("theme");
        break;
    }
  }, [theme]);

  return [theme, setTheme] as const;
}

export default useTheme;
