import { SelectTheme } from '../Select.type';

export type Option = {
  title: string;
  value: string;
};

export interface OptionProps {
  className?: string;
  theme?: SelectTheme;
  option: Option;
  onClick: (value: Option['value']) => void;
}
