import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
};

type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
    theme: "system",
    setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
    children,
    defaultTheme = "system",
    storageKey = "vite-ui-theme",
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem(storageKey) as Theme | null;
        return savedTheme || defaultTheme;
    });

    useEffect(() => {
        const root = window.document.documentElement;
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const applyTheme = (currentTheme: Theme) => {
            root.classList.remove("light", "dark");

            if (currentTheme === "system") {
                root.classList.add(mediaQuery.matches ? "dark" : "light");
                return;
            }

            root.classList.add(currentTheme);
        };

        applyTheme(theme);

        const handleChange = () => {
            if (theme === "system") {
                applyTheme("system");
            }
        };

        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, [theme]);

    const value = useMemo(
        () => ({
            theme,
            setTheme: (theme: Theme) => {
                localStorage.setItem(storageKey, theme);
                setTheme(theme);
            },
        }),
        [theme, storageKey]
    );

    return (
        <ThemeProviderContext.Provider value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);
    return context;
};