import { memo, useLayoutEffect, useState } from 'react';

import { theme } from 'shared/lib/theme/ThemeContext';
import { useTheme } from 'shared/lib/theme/useTheme';
import Select from 'shared/ui/Select/Select';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({}: ThemeSwitcherProps) => {
  const { changeTheme } = useTheme();
  const [pickTheme, setPickTheme] = useState('');

  const changeThemeHandler = (value: string) => {
    setPickTheme(value);
    changeTheme(value);
  };

  const localStorageTheme = localStorage.getItem('theme');

  useLayoutEffect(() => {
    if (!localStorageTheme) return;

    setPickTheme(() => localStorageTheme);
  }, [localStorageTheme]);

  const selectedTheme = theme.find((item) => item.value === pickTheme);

  return (
    <>
      <Select
        theme="inverted"
        mode="rows"
        options={theme}
        selected={selectedTheme || null}
        onChange={changeThemeHandler}
        placeholder="chose theme"
      />
    </>
  );
});
