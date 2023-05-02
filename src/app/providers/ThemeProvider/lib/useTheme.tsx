import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
  theme: Theme;
  changeTheme: (value: string) => void;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);
  const changeTheme = (value: string) => {
    if (!value) return;
    document.documentElement.dataset.theme = value;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, value);
  };
  return { theme, changeTheme };
}
