import { InputHTMLAttributes } from 'react';

import { ThemeVariant } from 'shared/types/themeVariant';

type HtmlInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

type InputTheme = ThemeVariant;

export interface InputProps extends HtmlInputProps {
  className?: string;
  loading?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  placeholder?: string;
  autoFocus?: boolean;
  label?: string;
  theme?: InputTheme;
}
