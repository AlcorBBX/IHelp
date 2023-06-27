import type { ButtonHTMLAttributes, MouseEvent } from 'react';

type ButtonTheme =
  | 'inverted'
  | 'background'
  | 'backgroundInverted'
  | 'outlinedDanger'
  | 'outline'
  | 'clear'
  | 'clearInverted';

type ButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl';

type HtmlButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onClick' | 'className' | 'disabled'
>;

export interface ButtonProps extends HtmlButtonProps {
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  active?: boolean;
}
