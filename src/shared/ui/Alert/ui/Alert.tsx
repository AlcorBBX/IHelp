import { forwardRef, useCallback } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon';
import { Portal } from 'shared/ui/Portal/Portal';

import cls from './Alert.module.scss';
import { AlertProps } from './Alert.type';

export const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    className,
    icon = false,
    message,
    title,
    type = 'default',
    isOpen = false,
    onClose,
  } = props;

  const mods = {
    [cls[type]]: type,
  };

  const closeHandler = useCallback(() => {
    if (onClose) onClose();
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div ref={ref} className={classNames(cls.alert, mods, [className])}>
        {icon ? <Icon type={icon} /> : null}
        <div>
          {title ? <p className={cls.title}>{title}</p> : null}
          <p className={cls.message}>{message}</p>
        </div>
        <Icon onClick={closeHandler} type="exit" />
      </div>
    </Portal>
  );
});
