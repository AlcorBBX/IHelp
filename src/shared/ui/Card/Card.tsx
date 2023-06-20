import { type MouseEvent, type ReactNode, forwardRef } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Card.module.scss';

type SelectionCardView = 'outlined' | 'clear';
type ContainerCardView = 'outlined' | 'filled' | 'raised';

type CardType = 'selection' | 'action' | 'container';
type CardTheme = 'normal' | 'info' | 'positive' | 'warning' | 'danger';
type CardView = SelectionCardView | ContainerCardView;
type CardSize = 'm' | 'l';

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Card click handler. Available for type: 'selection', 'action' */
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  /** Disabled card. Available for type: 'selection', 'action' */
  disabled?: boolean;
  /** Selected card. Available for type: 'selection' */
  selected?: boolean;
  /** Card's type affects on available properties */
  type?: CardType;
  /** Available for type: 'container' and 'selection' */
  view?: CardView;
  /** Card's base color. Available for type: 'container' */
  theme?: CardTheme;
  /** Card's size affects on available properties */
  size?: CardSize;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { className, onClick, disabled, selected, type, view, theme, size },
    ref,
  ) => {
    const mods = {
      [cls[theme]]: true,
      [cls[size]]: true,
      [cls.disabled]: disabled,
    };

    const isTypeAction = type === 'action';
    const isTypeSelection = type === 'selection';

    const hasAction = isTypeAction || isTypeSelection;
    const isClickable =
      hasAction && Boolean(onClick) && !(disabled || selected);

    return (
      <div
        ref={ref}
        className={classNames(cls.button, mods, [className, cls[theme]])}
        onClick={isClickable ? onClick : undefined}
      />
    );
  },
);
