import {
  I18N,
  createPluralize,
  useI18N as useI18nBase,
  useTranslate as useTranslateBase,
} from '@ayub-begimkulov/i18n';

// @ts-ignore
import en from './locales/en.json';
// @ts-ignore
import ru from './locales/ru.json';

const pluralizeEn = createPluralize('en');
const pluralizeRu = createPluralize('ru');

export const i18n = new I18N({
  defaultLang: 'en',
  languages: {
    en: {
      keyset: en,
      pluralize: pluralizeEn,
    },
    ru: {
      keyset: ru,
      pluralize: pluralizeRu,
    },
  },
});

export const useTranslte = useTranslateBase<typeof i18n>;
export const useI18n = useI18nBase<typeof i18n>;
