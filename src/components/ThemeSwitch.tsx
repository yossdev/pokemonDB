import { Icon } from "@iconify/react";
import useTheme from "../hooks/useTheme";

interface Options {
  light: string;
  dark: string;
  system: string;
}

function ThemeSwitch() {
  const [theme, setTheme] = useTheme();

  const options: Options = {
    light: "ic:outline-light-mode",
    dark: "ic:outline-dark-mode",
    system: "tabler:device-desktop-cog",
  };

  const optKeys = Object.keys(options);
  const handleTheme = () => {
    const i = optKeys.indexOf(theme as keyof Options);
    const opt = optKeys.length - 1 === i ? optKeys[0] : optKeys[i + 1];
    setTheme(opt);
  };

  return (
    <button onClick={handleTheme} className="p-1.5 border rounded-md">
      <Icon
        icon={options[theme as keyof Options]}
        width={24}
        className="text-sky-600"
      />
    </button>
  );
}

export default ThemeSwitch;
