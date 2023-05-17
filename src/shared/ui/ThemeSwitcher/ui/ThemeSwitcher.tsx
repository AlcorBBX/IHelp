import { memo, useState } from 'react';

import { useTheme } from 'app/providers/ThemeProvider';
import { theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

import Select from 'shared/ui/Select/Select';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { changeTheme } = useTheme();
  const [pickTheme, setPickTheme] = useState('');

  const changeThemeHandler = (value: string) => {
    const l = value;
    setPickTheme(value);
    changeTheme(value);
  };
  const selectedTheme = theme.find((item) => item.value === pickTheme);
  return (
    <>
      <Select
        mode="rows"
        options={theme}
        selected={selectedTheme || null}
        onChange={changeThemeHandler}
        placeholder="chose theme"
      />
    </>
  );
});
