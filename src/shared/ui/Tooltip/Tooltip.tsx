import {
  type MouseEvent,
  type MouseEventHandler,
  type ReactElement,
  useLayoutEffect,
  useState,
} from 'react';

import { useOutside } from 'shared/lib/hooks/useOutside/useOutside';
import { Portal } from 'shared/ui/Portal/Portal';

import cls from './Tooltip.module.scss';

interface TooltipChildProps {
  onMouseEnter: MouseEventHandler<HTMLElement>;
  onMouseLeave: MouseEventHandler<HTMLElement>;
}

export interface TooltipProps {
  text: string;
  children: (props: TooltipChildProps) => ReactElement;
}

// TODO add normal position, not only top

export const Tooltip = ({ children, text }: TooltipProps) => {
  const { ref, anchorEl, setAnchorEl } = useOutside();

  const [position, setPosition] = useState({ top: 0, left: 0 });

  useLayoutEffect(() => {
    const tooltipEl = ref.current;

    if (!anchorEl || !tooltipEl) {
      return;
    }

    // Метод Element.getBoundingClientRect() возвращает размер элемента
    // и его позицию относительно viewport
    // (часть страницы, показанная на экране, и которую мы видим).
    const anchorRect = anchorEl.getBoundingClientRect();
    const tooltipRect = tooltipEl.getBoundingClientRect();

    const TOP_SPACE = 5;

    setPosition({
      top: anchorRect.top - tooltipRect.height - TOP_SPACE,
      left: anchorRect.left + anchorRect.width / 2 - tooltipRect.width / 2,
    });
  }, [anchorEl]);

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
