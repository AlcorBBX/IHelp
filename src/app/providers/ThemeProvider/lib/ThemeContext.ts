import { createContext } from 'react';

export enum Theme {
  STEALTH = 'stealth',
  CHAOS_THEORY = 'chaos_theory',
  DARK_NOTE = 'dark_note',
  DARK = 'dark',
  LIGHT = 'light',
}

export const themes = {
  stealth: 'stealth',
  chaos_theory: 'chaos theory',
  dark_note: 'dark note',
  dino: 'dino',
  8008: '8008',
  dark: 'dark',
};

export const themesEntries = Object.entries(themes);
// export type ThemesType = ReturnType<typeof themes>

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
