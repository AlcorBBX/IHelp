import { useState } from 'react';
import type { ReactNode, SelectHTMLAttributes } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { Option, OptionItem, OptionValue } from './Option/Option';
import cls from './Select.module.scss';

type HtmlSelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'onChange'
>;

type RawValue = string | number;

// interface LabeledValue {
//   key?: string;
//   value: RawValue;
//   label: ReactNode;
// }

// type SelectValue =
//   | RawValue
//   | RawValue[]
//   | LabeledValue
//   | LabeledValue[]
//   | undefined;

// interface OptionsType {
//   key?: string;
//   value: RawValue;
//   label: RawValue;
// }

interface SelectProps<T extends OptionValue> extends HtmlSelectProps {
  defaultValue?: RawValue;
  className?: string;
  disabled?: boolean;
  options: OptionItem<T>[];
}

// interface SelectProp<
//   ValueType = any,
//   OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType,
// > extends Omit<
//     InternalSelectProps<ValueType, OptionType>,
//     | 'inputIcon'
//     | 'mode'
//     | 'getInputElement'
//     | 'getRawInputElement'
//     | 'backfill'
//     | 'pacement'
//   > {
//   placement?: SelectCommonPlacement;
//   mode?: 'multiple' | 'tags';
//   status?: InputStatus;
// }

export const Select = <T extends OptionValue>({
  className,
  disabled,
  options,
  ...other
}: SelectProps<T>) => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState<boolean>(true);

  // const changeHandler = (value: T) => {
  //   setValue(value);
  // };

  const changeFocus = () => {
    setIsFocused(() => !isFocused);
  };

  const mods = {
    [cls.disabled]: disabled,
  };

  const dropDownElements = (options: OptionItem<T>[]) => {
    if (!options) return null;

    return options.map((option) => {
      <Option optionItem={option} />;
    });
  };

  return (
    <div className={classNames(cls.select, mods, [className])}>
      <span onClick={() => changeFocus()}>{value ? value : 'select'}</span>
      {
        // isFocused &&
        options.map((option) => {
          <ul>
            <Option optionItem={option} />
          </ul>;
        })
        // <Option optionItem={dropDownElements(options)}/>
        // <ul className={cls.optionsList}>{dropDownElements(options)}</ul>
      }
    </div>
  );
};
