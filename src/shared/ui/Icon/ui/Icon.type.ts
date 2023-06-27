import type { MouseEvent } from 'react';

type IconTheme = 'invert' | 'primary';

type IconType =
  | 'arrow-down'
  | 'bell'
  | 'magnifier'
  | 'like'
  | 'dislike'
  | 'exit'
  | 'profile';

export type IconProps = {
  className?: string;
  theme?: IconTheme;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  type: IconType;
};
