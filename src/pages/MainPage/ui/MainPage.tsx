import { memo } from 'react';

import { useTranslate } from '@ayub-begimkulov/i18n';

const MainPage = memo(() => {
  const t = useTranslate();
  return <div>{t('Main Page')}</div>;
});
export default MainPage;
