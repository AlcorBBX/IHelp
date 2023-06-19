import React from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import css from './Icon.module.scss';

export type IconType =
  | 'key'
  | 'profile'
  | 'magnifier'
  | 'home'
  | 'tables'
  | 'calendar'
  | 'map'
  | 'widget'
  | 'setting'
  | 'user'
  | 'finance'
  | 'x'
  | 'loader'
  | 'exit';

export type Props = {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  type: IconType;
};

export const Icon = (props: Props) => {
  return (
    <div
      className={classNames(css.root, {}, [props.className])}
      onClick={props.onClick}
    >
      <div
        className={css.icon}
        style={{
          backgroundImage: `url("/images/${props.type}.svg")`,
        }}
      />
    </div>
  );
};
