import { forwardRef } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Skeleton.module.scss';
import { SkeletonProps } from './Skeleton.type';

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (props, ref) => {
    const {
      className,
      size = 'default',
      variant = 'text',
      animation = 'wave',
      ...otherProps
    } = props;

    const mods = {
      [cls[size]]: true,
      [cls[variant]]: true,
      [cls[animation]]: true,
    };

    return (
      <div
        className={classNames(cls.root, mods, [className])}
        ref={ref}
        {...otherProps}
      >
        {}
      </div>
    );
  },
);