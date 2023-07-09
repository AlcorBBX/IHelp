import { forwardRef } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon';
import { Portal } from 'shared/ui/Portal/Portal';

import cls from './Alert.module.scss';
import { AlertProps } from './Alert.type';

export const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const { className, message, title, type = 'default' } = props;

  const mods = {
    [cls[type]]: type,
  };

  // TODO make a choice of icon
  return (
    <Portal>
      <div ref={ref} className={classNames(cls.alert, mods, [className])}>
        <Icon type="profile" />
        <div>
          {title ? <p className={cls.title}>{title}</p> : null}
          <p className={cls.message}>{message}</p>
        </div>
        <Icon type="exit" />
      </div>
    </Portal>
  );
});
