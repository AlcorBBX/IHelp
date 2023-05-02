import { FC, ReactNode, useLayoutEffect, useMemo, useState } from 'react';

import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext, // themes,
} from '../lib/ThemeContext';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.STEALTH;

interface ThemeProviderProps {
  children?: ReactNode;
  initialTheme?: Theme;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  useLayoutEffect(() => {
    const datasetTheme = document.documentElement.dataset.theme;
    if (!datasetTheme) {
      document.documentElement.dataset.theme = defaultTheme;
    }
    // console.log(document.documentElement.dataset.theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
