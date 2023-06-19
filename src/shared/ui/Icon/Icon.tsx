import React from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Icon.module.scss';

type Theme = 'invert' | 'primary';

export type IconType =
  | 'arrow-down'
  | 'bell'
  | 'magnifier'
  | 'like'
  | 'dislike'
  | 'exit'
  | 'profile';

export type Props = {
  className?: string;
  theme?: Theme;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  type: IconType;
};

export const Icon = (props: Props) => {
  const { theme = 'primary', className, onClick, type } = props;
  const mods = {
    [cls[theme]]: true,
    // [cls.square]: square,
    // [cls[size]]: true,
    // [cls.disabled]: disabled,
    // [cls.active]: active,
  };
  return (
    <div className={classNames(cls.root, mods, [className])} onClick={onClick}>
      <div
        className={cls.icon}
        style={{
          backgroundImage: `url("/images/${type}.svg")`,
        }}
      />
    </div>
  );
};
