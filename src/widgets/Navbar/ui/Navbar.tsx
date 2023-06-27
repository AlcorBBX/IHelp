import { memo, useCallback, useState } from 'react';

import { useTranslate } from '@ayub-begimkulov/i18n';

// import { useDispatch, useSelector } from 'react-redux';
// import { getUserAuthData, userActions } from 'entities/User';
// import { LoginModal } from 'features/AuthByUserName';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';

import { HeaderLogo } from './HeaderLogo/HeaderLogo';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const t = useTranslate();
  const [isAuthModal, setIsAuthModal] = useState(false);
  // const authData = useSelector(getUserAuthData);
  // const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);
  const onLogout = () => {
    // dispatch(userActions.logout());
  };

  // if (authData) {
  //   return (
  //     <div className={classNames(cls.navbar, {}, [className])}>
  //       <Button theme="clearInverted" onClick={onLogout}>
  //         Выйти
  //       </Button>
  //     </div>
  //   );
  // }
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <HeaderLogo />
      {/* <HeaderActions /> */}
      <Button onClick={onShowModal}>{t('Log in')}</Button>
      {/* {isAuthModal && ( */}
      {/*   <LoginModal isOpen={isAuthModal} onClose={onCloseModal} /> */}
      {/* )} */}
    </div>
  );
});
