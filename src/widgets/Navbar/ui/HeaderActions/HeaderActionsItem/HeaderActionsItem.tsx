import type { ReactNode } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './HeaderActionsItem.module.scss';

interface HeaderActionsItemProps {
  children: ReactNode;
  className?: string;
}
export const HeaderActionsItem = ({
  children,
  className,
}: HeaderActionsItemProps) => (
  <div className={classNames(cls.actionContainer, {}, [className])}>
    {children}
  </div>
);
