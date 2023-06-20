import {
  type MouseEvent,
  type MouseEventHandler,
  type ReactElement,
} from 'react';

import { useOutside } from 'shared/lib/hooks/useOutside/useOutside';
import { useTooltipSetPosition } from 'shared/lib/hooks/useTooltipSetPosition/useTooltipSetPosition';
import { Portal } from 'shared/ui/Portal/Portal';

import cls from './Tooltip.module.scss';

interface TooltipChildProps {
  onMouseEnter: MouseEventHandler<HTMLElement>;
  onMouseLeave: MouseEventHandler<HTMLElement>;
}

export type TooltipType = 'top' | 'right' | 'left' | 'bottom';

export interface TooltipProps {
  text: string;
  type?: TooltipType;
  children: (props: TooltipChildProps) => ReactElement;
}

// TODO automaticly setPosition

export const Tooltip = ({ children, text, type = 'top' }: TooltipProps) => {
  const { ref, anchorEl, setAnchorEl } = useOutside();

  const { position } = useTooltipSetPosition({ type, anchorEl, ref });

  return (
    <>
      {anchorEl && (
        <Portal>
          <div
            ref={ref}
            className={cls.tooltip}
            style={{
              top: position.top,
              left: position.left,
            }}
          >
            {text}
          </div>
        </Portal>
      )}
      {children({
        onMouseLeave: () => setAnchorEl(null),
        onMouseEnter: (e: MouseEvent<HTMLElement>) => {
          setAnchorEl(e.currentTarget);
        },
      })}
    </>
  );
};
