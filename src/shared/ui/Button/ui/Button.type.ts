import type { ButtonHTMLAttributes, MouseEvent } from 'react';

import { SizeVariant, ThemeVariant } from 'shared/types';

type ButtonTheme = ThemeVariant;

type ButtonSize = SizeVariant;

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
