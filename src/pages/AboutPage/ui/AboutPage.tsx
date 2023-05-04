import { memo } from 'react';

import { useTranslate } from '@ayub-begimkulov/i18n';

const AboutPage = memo(() => {
  const t = useTranslate();
  return <div>{t('About')}</div>;
});
export default AboutPage;
