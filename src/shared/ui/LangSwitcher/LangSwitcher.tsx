import { memo } from 'react';

import { useI18N } from '@ayub-begimkulov/i18n';

import Select from '../Select/Select';

interface LangSwitcherProps {
  className?: string;
}

const langs = [
  { value: 'en', title: 'en' },
  { title: 'ru', value: 'ru' },
];

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
  const { lang, setLang } = useI18N();

  let l = { title: lang as string, value: lang as string };

  return (
    <>
      <Select
        theme="inverted"
        mode="rows"
        options={langs}
        selected={l || null}
        onChange={setLang}
        placeholder="chose lang"
      />
    </>
  );
});
