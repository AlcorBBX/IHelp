import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Icon.module.scss';
import { IconProps } from './Icon.type';

export const Icon = ({
  theme = 'primary',
  className,
  onClick,
  type,
}: IconProps) => {
  const mods = {
    [cls[theme]]: true,
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
