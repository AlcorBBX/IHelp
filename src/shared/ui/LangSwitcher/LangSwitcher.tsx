import { memo } from 'react';

import { useI18N } from '@ayub-begimkulov/i18n';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

const allLanguages = ['en', 'ru'];

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { lang, setLang } = useI18N();
  return (
    <select onChange={(e) => setLang(e.target.value)}>
      {allLanguages.map((lang) => (
        <option value={lang}>{lang}</option>
      ))}
    </select>
  );
});
