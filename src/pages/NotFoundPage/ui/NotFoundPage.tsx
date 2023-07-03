import { memo } from 'react';

import { useTranslate } from '@ayub-begimkulov/i18n';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = memo(({ className }: NotFoundPageProps) => {
  const t = useTranslate();

  return (
    <div className={classNames(cls.notfoundpage, {}, [className])}>
      {t('Not found page')}
    </div>
  );
});
