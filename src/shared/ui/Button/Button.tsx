import { ButtonHTMLAttributes, FC, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

type Theme =
  | 'inverted'
  | 'background'
  | 'backgroundInverted'
  | 'outlinedDanger'
  | 'outline'
  | 'clear'
  | 'clearInverted';

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: Theme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  active?: boolean;
}

export const Button: FC<ButtonProps> = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme,
    square,
    disabled,
    active,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: disabled,
    [cls.active]: active,
  };

  return (
    <button
      className={classNames(cls.button, mods, [className, cls[theme]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
