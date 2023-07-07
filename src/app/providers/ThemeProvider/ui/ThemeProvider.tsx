import { FC, ReactNode, useLayoutEffect, useMemo, useState } from 'react';

import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext, // themes,
  themes,
} from 'shared/lib/theme/ThemeContext';

// TODO FIX ts-ignore
const defaultTheme =
  // @ts-ignore
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || themes.stealth;

interface ThemeProviderProps {
  children?: ReactNode;
  initialTheme?: Theme;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  initialTheme,
}) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  // TODO FIX ts-ignore
  useLayoutEffect(() => {
    const datasetTheme = document.documentElement.dataset.theme;
    if (!datasetTheme) {
      // @ts-ignore
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
