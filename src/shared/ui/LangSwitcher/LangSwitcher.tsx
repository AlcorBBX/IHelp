import { memo } from 'react';

import { useI18N } from '@ayub-begimkulov/i18n';

// import { classNames } from 'shared/lib/classNames/classNames';
import Select from '../Select/Select';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

// const allLanguages = ['en', 'ru'];
const langs = [
  { value: 'en', title: 'en' },
  { title: 'ru', value: 'ru' },
];

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { lang, setLang } = useI18N();
  return (
    <>
      {/* <select onChange={(e) => setLang(e.target.value)}> */}
      {/*   {allLanguages.map((lang) => ( */}
      {/*     <option value={lang}>{lang}</option> */}
      {/*   ))} */}
      {/* </select> */}
      <Select
        mode="rows"
        options={langs}
        selected={null || null}
        onChange={setLang}
        placeholder="chose lang"
      />
    </>
  );
});
