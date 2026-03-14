// src/theme/ThemeContext.tsx
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  type ColorScheme,
  DarkColors,
  LightColors,
  makeCategoryColors,
} from "./index";

const THEME_KEY = "app:theme";

interface ThemeContextValue {
  isDark: boolean;
  colors: ColorScheme;
  categoryColors: Record<string, string>;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  isDark: true,
  colors: DarkColors,
  categoryColors: makeCategoryColors(DarkColors),
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem(THEME_KEY).then((saved) => {
      if (saved === "light") setIsDark(false);
    });
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      AsyncStorage.setItem(THEME_KEY, next ? "dark" : "light");
      return next;
    });
  }, []);

  const colors = isDark ? DarkColors : LightColors;
  const categoryColors = makeCategoryColors(colors);

  return (
    <ThemeContext.Provider
      value={{ isDark, colors, categoryColors, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
