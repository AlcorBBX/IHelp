import type { MouseEvent } from 'react';

type IconTheme = 'invert' | 'primary';

export type IconType =
  | 'arrow-down'
  | 'bell'
  | 'magnifier'
  | 'like'
  | 'dislike'
  | 'exit'
  | 'profile'
  | 'warning-circle'
  | 'checkmark'
  | 'question-circle'
  | 'close';

export type IconProps = {
  className?: string;
  theme?: IconTheme;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  type: IconType;
};
