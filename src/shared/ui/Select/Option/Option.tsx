import { useEffect, useRef } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

import { type Theme } from '../Select';
import cls from './Option.module.scss';

export type Option = {
  title: string;
  value: string;
};

export type OptionProps = {
  className?: string;
  theme?: Theme;
  option: Option;
  onClick: (value: Option['value']) => void;
};

export const OptionEl = (props: OptionProps) => {
  const {
    className,
    theme,
    option: { value, title },
    onClick,
  } = props;
  const optionRef = useRef<HTMLButtonElement>(null);

  const handleClick = (clickedValue: Option['value']) => () => {
    onClick(clickedValue);
  };

  useEffect(() => {
    const option = optionRef.current;
    if (!option) return;
    const handleEnterKeyDown = (event: KeyboardEvent) => {
      if (document.activeElement === option && event.key === 'Enter') {
        onClick(value);
      }
    };

    option.addEventListener('keydown', handleEnterKeyDown);

    return () => {
      option.removeEventListener('keydown', handleEnterKeyDown);
    };
  }, [value, onClick]);

  return (
    <Button
      className={classNames(cls.option, {}, [className, cls[theme]])}
      value={value}
      onClick={handleClick(value)}
      tabIndex={0}
      data-testid={`select-option-${value}`}
      ref={optionRef}
    >
      {title}
    </Button>
  );
};
