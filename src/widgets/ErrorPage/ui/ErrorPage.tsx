import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';

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
      <p>An error occurred</p>
      <Button theme="outlinedDanger" onClick={reloadPage}>
        Reload page
      </Button>
    </div>
  );
};
