import { classNames } from 'shared/lib/classNames/classNames';

import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={classNames(cls.errorpage, {}, [className])}>
      <p>Произошла ошибка</p>
      <button onClick={reloadPage}>Обновить страницу</button>
    </div>
  );
};
