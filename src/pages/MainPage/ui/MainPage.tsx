import { useTranslate } from '@ayub-begimkulov/i18n';
import { memo } from 'react';

const MainPage = memo(() => {
  const t = useTranslate();
  return <div>{t('Main Page')}</div>;
});
export default MainPage;
