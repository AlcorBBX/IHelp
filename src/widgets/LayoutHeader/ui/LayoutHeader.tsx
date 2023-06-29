import { classNames } from 'shared/lib/classNames/classNames';
import { HeaderLogo as Logo } from 'shared/ui/HeaderLogo';

import cls from './LayoutHeader.module.scss';
import { LayoutHeaderProps } from './LayoutHeader.type';

export const LayoutHeader = ({
  className,
  rightContentSlot,
}: LayoutHeaderProps) => {
  return (
    <header className={classNames(cls.header, {}, [className])}>
      <Logo />
      <div className={cls.right}>
        {rightContentSlot}
        {/* <HeaderActions /> */}
        {/* {isAuthModal && ( */}
        {/* <LoginModal isOpen={isAuthModal} onClose={onCloseModal} /> */}
        {/* )} */}
      </div>
    </header>
  );
};
