import { memo, useCallback, useRef } from 'react';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';

import monkey from 'shared/assets/monkey/monkey.gif';
import monkeyeyesclosed from 'shared/assets/monkey/monkeyclosedeye.gif';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { FaceAnimation } from 'shared/ui/FaceAnimation/FaceAnimation';
import { Text } from 'shared/ui/Text/Text';

import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { GoogleAuthAction } from '../LoginActions/GoogleAuthAction';
import { Form } from './Form';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const dispatch = useAppDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);

  const imgref = useRef<HTMLDivElement | null>(null);
  function closeye() {
    if (!imgref) return;
    if (!imgref.current) return;

    imgref.current.style.backgroundImage = `url(${monkeyeyesclosed})`;

    // imgref.current.firstChild.style.marginTop = '0%';
  }
  function openeye() {
    if (!imgref) return;
    if (!imgref.current) return;

    imgref.current.style.backgroundImage = `url(${monkey})`;
    // imgref.current.firstChild.style.marginTop = '110%';
  }

  // const handleLogin = (email: string, password: string) => {
  //   const auth = getAuth();
  //   signInWithEmailAndPassword(auth, email, password).then((data) =>
  //     console.log(data),
  //   );
  // };

  const onChangeUserName = useCallback(
    (value: string) => {
      dispatch(loginActions.setUserName(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(
    async (username: string, password: string) => {
      try {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, username, password).then(
          (data) => console.log(data),
          // dispatch(loginByUserName({ username, password })),
        );
      } catch (error) {}
    },
    [username, password, dispatch, onSuccess],
  );

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={classNames(cls.loginform, {}, [className])}>
        <FaceAnimation ref={imgref} />
        <Text title="Форма авторизации" />
        <div className={cls.authActionsWrapper}>
          <GoogleAuthAction />
          <GoogleAuthAction />
          <GoogleAuthAction />
        </div>
        {error && (
          <Text text="Вы ввели неправильный логин или пароль" theme="error" />
        )}
        <Form
          handleClick={onLoginClick}
          openEyeClick={openeye}
          closeEyeClick={closeye}
          onChangeUserName={onChangeUserName}
          onChangePassword={onChangePassword}
          name={username}
          password={password}
          isLoading={isLoading}
        />
      </div>
    </DynamicModuleLoader>
  );
});
export default LoginForm;
