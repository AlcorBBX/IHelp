import { type MouseEvent } from 'react';

import { useOutside } from 'shared/lib/hooks/useOutside/useOutside';
import { useTooltipSetPosition } from 'shared/lib/hooks/useTooltipSetPosition/useTooltipSetPosition';
import { Portal } from 'shared/ui/Portal/Portal';

import cls from './Tooltip.module.scss';
import type { TooltipProps } from './Tooltip.type';

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
