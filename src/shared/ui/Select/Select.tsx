import { useEffect, useRef, useState } from 'react';
import type { MouseEventHandler } from 'react';

// import Arrow from 'shared/assets/arrow-down.svg';
import { classNames } from 'shared/lib/classNames/classNames';

import { Option, OptionEl } from './Option/Option';
import cls from './Select.module.scss';

// TODO move some logic in hooks

/* export enum SelectTheme {
  // CLEAR = 'clear',
  // OUTLINE = 'outline',
  // OUTLINED_DANGER = 'outlinedDanger',
  // CLEAR_INVERTED = 'clearInverted',
  // BACKGROUND = 'background',
  // BACKGROUND_INVERTED = 'backgroundInverted',
  INVERTED = 'inverted',
} */

export type Theme = 'primary' | 'inverted';

type SelectProps = {
  theme?: Theme;
  className?: string;
  selected: Option | null;
  options: Option[];
  placeholder?: string;
  mode?: 'rows' | 'cells';
  status?: 'default' | 'invalid';
  onChange?: (selected: Option['value']) => void;
  onClose?: () => void;
};

const Select = ({
  theme,
  className,
  mode = 'rows',
  options,
  placeholder,
  status = 'default',
  selected,
  onChange,
  onClose,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event;
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        isOpen && onClose?.();
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [onClose]);

  useEffect(() => {
    const placeholderEl = placeholderRef.current;
    if (!placeholderEl) return;

    const handleEnterKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        setIsOpen((prev) => !prev);
      }
    };
    placeholderEl.addEventListener('keydown', handleEnterKeyDown);

    return () => {
      placeholderEl.removeEventListener('keydown', handleEnterKeyDown);
    };
  }, []);

  const handleOptionClick = (value: Option['value']) => {
    setIsOpen(false);
    onChange?.(value);
  };
  const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen((prev) => !prev);
  };

  const mods = {
    [cls[theme]]: true,
    // [cls.disabled]: disabled,
    // [cls.active]: active,
  };

  return (
    <div
      className={classNames(cls.selectWrapper, mods, [className, cls[theme]])}
      ref={rootRef}
      data-is-active={isOpen}
      data-mode={mode}
      data-testid="selectWrapper"
    >
      <div className={cls.arrow}>{/* <Arrow /> */}</div>
      <div
        className={cls.placeholder}
        data-status={status}
        data-selected={!!selected?.value}
        onClick={handlePlaceHolderClick}
        role="button"
        tabIndex={0}
        ref={placeholderRef}
      >
        {selected?.title || placeholder}
      </div>
      {isOpen && (
        <ul className={cls.select} data-testid="selectDropdown">
          {options.map((option) => (
            <OptionEl
              theme={theme}
              key={option.value}
              option={option}
              onClick={handleOptionClick}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
