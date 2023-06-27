import { forwardRef } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';
import type { ButtonProps } from './Button.type';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      onClick,
      loading,
      children,
      theme = 'primary',
      square = false,
      disabled = false,
      active = false,
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
        ref={ref}
        className={classNames(cls.button, mods, [className])}
        disabled={disabled}
        onClick={onClick}
        {...otherProps}
      >
        {children}
      </button>
    );
  },
);
