import { useCallback, useRef, useState } from 'react';

import monkey from 'shared/assets/monkey/monkey.gif';
import monkeyeyesclosed from 'shared/assets/monkey/monkeyclosedeye.gif';
import {
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from 'shared/lib/Firebase';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';

import { Face } from '../Face/Face';
import cls from './AuthForm.module.scss';
import { Form, type handleClickProps } from './Form';

export interface LoginFormProps {
  className?: string;
}

export const AuthForm = ({ className }: LoginFormProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');

  const [isLogin, setIsLogin] = useState<boolean>(true);
  // const { username, password, isLoading, error } =
  //   useAppSelector(getLoginState);
  //
  const onChangeIsLogin = useCallback(() => {
    setIsLogin(() => !isLogin);
  }, [isLogin]);

  const onChangeName = useCallback(
    (value: string) => {
      setName(value);
      // dispatch(loginActions.setUserName(value));
    },
    [email],
  );

  const onChangeEmail = useCallback(
    (value: string) => {
      setEmail(value);
      // dispatch(loginActions.setUserName(value));
    },
    [email],
  );

  const onChangePassword = useCallback((value: string) => {
    setPassword(value);
    // dispatch(loginActions.setPassword(value));
  }, []);

  const imgref = useRef<HTMLDivElement>(null);
  function closeye() {
    if (!imgref) return;
    if (!imgref?.current) return;
    imgref.current.style.backgroundImage = `url(${monkeyeyesclosed})`;
    if (imgref.current.firstChild) {
      // TODO FIX
      // @ts-ignore
      imgref.current.firstChild.style.marginTop = '0%';
    }
  }
  function openeye() {
    if (!imgref) return;
    if (!imgref?.current) return;
    imgref.current.style.backgroundImage = `url(${monkey})`;
    if (imgref.current.firstChild) {
      // TODO FIX
      // @ts-ignore
      imgref.current.firstChild.style.marginTop = '110%';
    }
  }

  const handleClick = ({ name, email, password }: handleClickProps) => {
    if (isLogin) {
      logInWithEmailAndPassword(email, password);
    } else {
      if (!name) return;
      registerWithEmailAndPassword(name, email, password);
    }
  };

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <h2>{isLogin ? 'Log in' : 'Sign up'}</h2>
      <Face ref={imgref} />
      <div className={cls.authActionsWrapper}>
        <Button onClick={signInWithGoogle} theme="outlinedDanger">
          GitHub Auth
        </Button>
        <Button onClick={signInWithGoogle} theme="outlinedDanger">
          Google Auth
        </Button>
        <Button onClick={signInWithGoogle} theme="outlinedDanger">
          Facebook Auth
        </Button>
      </div>
      <Form
        name={name}
        email={email}
        password={password}
        isLogin={isLogin}
        handleClick={handleClick}
        onChangeName={onChangeName}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        onChangeIsLogin={onChangeIsLogin}
        openEyeClick={openeye}
        closeEyeClick={closeye}
        // isLoading={isL}
      />
    </div>
  );
};
