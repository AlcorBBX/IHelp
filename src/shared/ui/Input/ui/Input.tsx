import { type ChangeEvent, memo, useEffect, useRef, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Input.module.scss';
import { InputProps } from './Input.type';

export const Input = memo(
  ({
    className,
    loading,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    label,
    theme = 'background',
    ...otherProps
  }: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [caretPositions, setCaretPosition] = useState(0);

    const ref = useRef<HTMLInputElement>(null);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      if (!value) return;
      if (value?.length > e?.target?.value?.length) {
        onChange?.(e.target.value);
        setCaretPosition(e?.target?.selectionStart || 0);
        return;
      }
      onChange?.(e.target.value);
      setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
      setIsFocused(false);
    };

    const onFocus = () => {
      setIsFocused(true);
    };

    const onSelect = (e: any) => {
      setCaretPosition(e?.target?.selectionStart || 0);
    };

    useEffect(() => {
      if (autoFocus) {
        setIsFocused(true);
        ref.current?.focus();
      }
    }, [autoFocus]);

    return (
      <div
        className={classNames(cls.inputWrapper, {}, [className, cls[theme]])}
      >
        {label && (
          <div className={cls.labelBlock}>
            <span className={cls.label}>{`${label}`}</span>
          </div>
        )}
        <div className={cls.inputContainer}>
          {placeholder && (
            <div className={cls.placeholder}>{`${placeholder}:`}</div>
          )}
          <div className={cls.caretWrapper}>
            <input
              type={type}
              value={value}
              onChange={onChangeHandler}
              className={cls.input}
              onFocus={onFocus}
              onBlur={onBlur}
              onSelect={onSelect}
              ref={ref}
              {...otherProps}
            />

            {isFocused && (
              <span
                className={cls.caret}
                style={{ left: `${caretPositions * 9}px` }}
              />
            )}
          </div>
        </div>
      </div>
    );
  },
);
