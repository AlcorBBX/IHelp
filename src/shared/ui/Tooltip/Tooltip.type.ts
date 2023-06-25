import { MouseEventHandler, ReactElement } from 'react';

interface TooltipChildProps {
  onMouseEnter: MouseEventHandler<HTMLElement>;
  onMouseLeave: MouseEventHandler<HTMLElement>;
}

type TooltipPosition = 'top' | 'right' | 'left' | 'bottom';

export interface TooltipProps {
  text: string;
  type?: TooltipPosition;
  children: (props: TooltipChildProps) => ReactElement;
}
