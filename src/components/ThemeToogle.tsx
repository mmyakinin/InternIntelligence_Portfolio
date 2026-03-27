import type React from "react";

import { useTheme } from "../context/theme-provider";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle: React.FC = () => {
    const { theme, setTheme } = useTheme();

    const isDark =
        theme === "dark" ||
        (theme === "system" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches);

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark");
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full border-2 hover:bg-neutral/10 transition-all duration-300"
        >
            {isDark ? <Sun /> : <Moon />}
        </button>
    );
};
