import { Option } from './Option/Option.type';

export type SelectTheme = 'primary' | 'inverted';

export interface SelectProps {
  theme?: SelectTheme;
  className?: string;
  selected: Option | null;
  options: Option[];
  placeholder?: string;
  mode?: 'rows' | 'cells';
  status?: 'default' | 'invalid';
  onChange?: (selected: Option['value']) => void;
  onClose?: () => void;
}
