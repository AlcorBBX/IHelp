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
      theme = 'background',
      ...otherProps
    } = props;

    const mods = {
      [cls[size]]: size,
      [cls[variant]]: variant,
      [cls[animation]]: animation,
    };

    return (
      <div
        className={classNames(cls.skeleton, mods, [className, cls[theme]])}
        ref={ref}
        {...otherProps}
      >
        {}
      </div>
    );
  },
);
