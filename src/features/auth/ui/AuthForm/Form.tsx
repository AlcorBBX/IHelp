import { useTranslate } from '@ayub-begimkulov/i18n';

import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';

import cls from './Form.module.scss';

export type handleClickProps = {
  name?: string;
  email: string;
  password: string;
};

interface FormProps {
  handleClick: (args: handleClickProps) => void;
  openEyeClick?(): void;
  closeEyeClick?(): void;
  onChangePassword?: (value: string) => void;
  onChangeEmail?: (value: string) => void;
  onChangeName?: (value: string) => void;
  onChangeIsLogin(): void;
  email: string;
  name: string;
  password: string;
  isLoading?: boolean;
  isLogin: boolean;
}

export const Form = ({
  handleClick,
  openEyeClick,
  closeEyeClick,
  onChangeEmail,
  onChangePassword,
  onChangeName,
  onChangeIsLogin,
  email,
  isLogin,
  name,
  password,
  isLoading,
}: FormProps) => {
  const t = useTranslate();

  return (
    <form>
      {!isLogin && (
        <Input
          theme="background"
          type="text"
          label={t('Nickname')}
          className={cls.input}
          placeholder={t('Write nickname')}
          autoFocus
          onChange={onChangeName}
          value={name}
          onClick={openEyeClick}
        />
      )}
      <Input
        theme="background"
        type="email"
        label={t('Email')}
        className={cls.input}
        placeholder={t('Write email')}
        onChange={onChangeEmail}
        value={email}
        onClick={openEyeClick}
      />
      <Input
        theme="background"
        type="password"
        label={t('Password')}
        className={cls.input}
        placeholder={t('Write password')}
        onChange={onChangePassword}
        value={password}
        onClick={closeEyeClick}
      />
      <div className={cls.actionsWrapper}>
        <Button
          type="button"
          onClick={() => onChangeIsLogin()}
          theme="background"
          className={cls.loginBtn}
          disabled={isLoading}
        >
          {isLogin ? t('Sign up') : t('Log in')}
        </Button>
        <Button
          type="submit"
          theme="outlinedDanger"
          onClick={() => handleClick({ name, email, password })}
          className={cls.loginBtn}
          disabled={isLoading}
        >
          {isLogin ? t('Log in') : t('SIgn up')}
        </Button>
      </div>
    </form>
  );
};
