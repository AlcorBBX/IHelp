import { memo, useState } from 'react';

import { useTheme } from 'app/providers/ThemeProvider';
import { themesEntries } from 'app/providers/ThemeProvider/lib/ThemeContext';

import { OptionItem } from 'shared/ui/Select/Option/Option';
import { Select } from 'shared/ui/Select/Select';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { changeTheme } = useTheme();
  const [pickTheme, setPickTheme] = useState('');

  // todo fix any type
  const changeThemeHandler = (e: any) => {
    const l = e.target.value;
    const result = l.split(' ').join('_');
    // console.log(result);
    setPickTheme(e.target.value);
    changeTheme(result);
  };

  return (
    <>
      <select value={pickTheme} onChange={(e) => changeThemeHandler(e)}>
        {themesEntries.map((value) => (
          <option key={value[0]}>{value[1]}</option>
        ))}
      </select>
      {/* <Select options={optionsNormalize(themesEntries)} /> */}
      {/* <div>
        {themesEntries.map((value) => (
          <div>
            <span />
            <div>{value[1]}</div>
            <div>
              <span />
              <span />
              <span />
            </div>
          </div>
        ))}
      </div> */}
    </>
  );
});
