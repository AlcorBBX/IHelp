// import { useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input, InputTheme } from 'shared/ui/Input/Input';

import cls from './LoginForm.module.scss';

interface FormProps {
  handleClick: (email: string, password: string) => void;
  openEyeClick?(): void;
  closeEyeClick?(): void;
  onChangePassword?: (value: string) => void;
  onChangeUserName?: (value: string) => void;
  name?: string;
  password?: string;
  isLoading?: boolean;
}

export const Form = ({
  handleClick,
  openEyeClick,
  closeEyeClick,
  onChangeUserName,
  onChangePassword,
  name,
  password,
  isLoading,
}: FormProps) => {
  return (
    <form>
      <Input
        theme={InputTheme.INVERTED}
        type="text"
        label="Write name"
        className={cls.input}
        placeholder="Write name"
        autoFocus
        onChange={onChangeUserName}
        value={name}
        onClick={openEyeClick}
      />
      <Input
        theme={InputTheme.INVERTED}
        type="text"
        label="Write password"
        className={cls.input}
        placeholder="Write password"
        onChange={onChangePassword}
        value={password}
        onClick={closeEyeClick}
      />
      <div className={cls.actionsWrapper}>
        <Button
          theme={ButtonTheme.INVERTED}
          className={cls.loginBtn}
          disabled={isLoading}
        >
          Sig in
        </Button>
        <Button
          theme={ButtonTheme.INVERTED}
          onClick={() => handleClick(name, password)}
          className={cls.loginBtn}
          disabled={isLoading}
        >
          Log in
        </Button>
      </div>
    </form>
  );
};
