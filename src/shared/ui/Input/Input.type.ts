import { InputHTMLAttributes } from 'react';

type HtmlInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

type InputTheme =
  | 'clear'
  | 'outline'
  | 'outlinedDanger'
  | 'clearInverted'
  | 'background'
  | 'backgroundInverted'
  | 'inverted';

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
