import { Link } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';
import type { AppLinkProps } from './AppLink.type';

export const AppLink = ({
  to,
  children,
  className,
  theme = 'primary',
  ...other
}: AppLinkProps) => {
  return (
    <Link
      to={to}
      className={classNames(cls.applink, {}, [className, cls[theme]])}
      {...other}
    >
      {children}
    </Link>
  );
};
