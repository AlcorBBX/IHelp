import { useTranslate } from '@ayub-begimkulov/i18n';

import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';

import cls from './Form.module.scss';

interface FormProps {
  handleClick: (email: string, password: string) => void;
  openEyeClick?(): void;
  closeEyeClick?(): void;
  onChangePassword?: (value: string) => void;
  onChangeEmail?: (value: string) => void;
  onChangeNickname?: (value: string) => void;
  email: string;
  nickname?: string;
  password: string;
  isLoading?: boolean;
}

export const Form = ({
  handleClick,
  openEyeClick,
  closeEyeClick,
  onChangeEmail,
  onChangePassword,
  onChangeNickname,
  email,
  nickname,
  password,
  isLoading,
}: FormProps) => {
  const t = useTranslate();

  return (
    <form>
      <Input
        theme="background"
        type="text"
        label={t('Nickname')}
        className={cls.input}
        placeholder={t('Write nickname')}
        autoFocus
        onChange={onChangeNickname}
        value={nickname}
        onClick={openEyeClick}
      />
      <Input
        theme="background"
        type="text"
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
          theme="background"
          className={cls.loginBtn}
          disabled={isLoading}
        >
          {t('Sign up')}
        </Button>
        <Button
          theme="outlinedDanger"
          onClick={() => handleClick(email, password)}
          className={cls.loginBtn}
          disabled={isLoading}
        >
          {t('Log in')}
        </Button>
      </div>
    </form>
  );
};
