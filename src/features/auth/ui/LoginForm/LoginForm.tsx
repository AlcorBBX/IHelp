import { useCallback, useState } from 'react';

import {
  logInWithEmailAndPassword,
  signInWithGoogle,
} from 'shared/lib/Firebase';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';

import { Form } from './Form';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState('');
  // const { username, password, isLoading, error } =
  //   useAppSelector(getLoginState);

  const onChangeUserName = useCallback((value: string) => {
    setEmail(value);
    // dispatch(loginActions.setUserName(value));
  }, []);

  const onChangePassword = useCallback((value: string) => {
    setPassword(value);
    // dispatch(loginActions.setPassword(value));
  }, []);

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <h2>Log in</h2>
      <div className={cls.authActionsWrapper}>
        <Button onClick={signInWithGoogle} theme="outlinedDanger">
          Google Auth
        </Button>
      </div>
      <Form
        handleClick={logInWithEmailAndPassword}
        // openEyeClick={openeye}
        // closeEyeClick={closeye}
        onChangeEmail={onChangeUserName}
        onChangePassword={onChangePassword}
        email={email}
        password={password}
        // isLoading={isLoading}
      />
    </div>
  );
};
