import { type ButtonHTMLAttributes, type FC, memo } from 'react';

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

type ButtonSize = 'm' | 'l' | 'xl';

type HtmlButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onClick' | 'className' | 'disabled'
>;

interface ButtonProps extends HtmlButtonProps {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
  theme?: Theme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  active?: boolean;
}

export const Button: FC<ButtonProps> = memo((props: ButtonProps) => {
  const {
    className,
    onClick,
    loading,
    children,
    theme,
    square,
    disabled,
    active,
    size = 'm',
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
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
});
