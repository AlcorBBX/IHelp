import { useCallback, useRef, useState } from 'react';

import monkey from 'shared/assets/monkey/monkey.gif';
import monkeyeyesclosed from 'shared/assets/monkey/monkeyclosedeye.gif';
import {
  logInWithEmailAndPassword,
  signInWithGoogle,
} from 'shared/lib/Firebase';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';

import { Face } from '../Face/Face';
import { Form } from './Form';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // const { username, password, isLoading, error } =
  //   useAppSelector(getLoginState);

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

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <h2>Log in</h2>
      <Face ref={imgref} />
      <div className={cls.authActionsWrapper}>
        <Button onClick={signInWithGoogle} theme="outlinedDanger">
          Google Auth
        </Button>
      </div>
      <Form
        handleClick={logInWithEmailAndPassword}
        openEyeClick={openeye}
        closeEyeClick={closeye}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        email={email}
        password={password}
        // isLoading={isLoading}
      />
    </div>
  );
};
