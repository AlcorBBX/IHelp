import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Option.module.scss';

export type OptionValue = string | number | object;

export interface OptionItem<T extends OptionValue> {
  id?: number;
  value?: T;
  text: string;
}

interface OptionProps<T extends OptionValue> {
  className?: string;
  optionItem: OptionItem<T>;
}

export const Option = <T extends OptionValue>({
  className,
  optionItem,
}: OptionProps<T>) => {
  return (
    <li className={classNames(cls.option, {}, [className])}>
      {optionItem.text}
    </li>
  );
};
