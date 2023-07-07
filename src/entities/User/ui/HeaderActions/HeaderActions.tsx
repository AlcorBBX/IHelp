import { memo, useCallback, useEffect, useLayoutEffect, useState } from 'react';

import { collection, getDocs, query, where } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

import { AuthForm } from 'features/auth';

import { auth, db, logout } from 'shared/lib/Firebase';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import { Modal } from 'shared/ui/Modals';
import { Skeleton } from 'shared/ui/Skeleton';
import { SmallProfile } from 'shared/ui/SmallProfile';

import cls from './HeaderActions.module.scss';
import { HeaderActionsProps } from './HeaderActions.type';

// TODO add more styles

export const HeaderActions = memo(({ className }: HeaderActionsProps) => {
  const [user, loading, error] = useAuthState(auth);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [name, setName] = useState('');
  const [lvl, setLvl] = useState<number>(0);
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  if (loading) return <Skeleton variant="rounded" animation="pulse" />;

  const notAuth = (
    <div>
      <Button theme="primary" onClick={onShowModal}>
        Log in
      </Button>
      {isAuthModal && (
        <Modal isOpen={isAuthModal} onClose={onCloseModal}>
          <AuthForm />
        </Modal>
      )}
    </div>
  );

  if (!user?.uid) {
    return notAuth;
  }

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
      const doc = await getDocs(q);

      const data = doc?.docs[0]?.data();
      data?.name && setName(data.name);
      data?.lvl && setLvl(data.lvl);
    } catch (err) {
      console.error(err);
      alert('An error occured while fetching user data');
    }
    setIsLoading(false);
  };

  fetchUserName();
  // useEffect(() => {
  //   if (loading) return;
  //   fetchUserName();
  // }, [user, loading]);

  return (
    <div className={classNames(cls.headerActions, {}, [className])}>
      <SmallProfile
        loading={isLoading}
        profileLink={user.uid}
        nickname={name}
        lvl={lvl}
      />

      <Button theme="clear" size="s">
        <Icon type="bell" />
      </Button>
      <Button onClick={logout} theme="clear" size="s">
        <Icon type="exit" />
      </Button>
    </div>
  );
});
