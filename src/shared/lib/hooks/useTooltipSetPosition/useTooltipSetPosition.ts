import { type RefObject, useLayoutEffect, useState } from 'react';

import type { TooltipPosition } from 'shared/ui/Tooltip/ui/Tooltip.type';

interface useSetPositionProps {
  type: TooltipPosition;
  anchorEl: HTMLElement | null;
  ref: RefObject<HTMLDivElement>;
}

export const useTooltipSetPosition = ({
  type,
  anchorEl,
  ref,
}: useSetPositionProps) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useLayoutEffect(() => {
    const tooltipEl = ref.current;
    if (!anchorEl || !tooltipEl) {
      return;
    }
    if (!anchorEl || !tooltipEl) {
      return;
    }
    // Метод Element.getBoundingClientRect() возвращает размер элемента
    // и его позицию относительно viewport
    // (часть страницы, показанная на экране, и которую мы видим).
    const anchorRect = anchorEl.getBoundingClientRect(); // children
    const tooltipRect = tooltipEl.getBoundingClientRect(); // tooltip

    const TOP_SPACE = 5;
    if (type === 'top') {
      setPosition({
        top: anchorRect.top - tooltipRect.height - TOP_SPACE,
        left: anchorRect.left + anchorRect.width / 2 - tooltipRect.width / 2,
      });
    } else if (type === 'bottom') {
      setPosition({
        top: anchorRect.top + tooltipRect.height,
        left: anchorRect.left + anchorRect.width / 2 - tooltipRect.width / 2,
      });
    } else if (type === 'left') {
      setPosition({
        top: anchorRect.top,
        left: anchorRect.left - anchorRect.width - 5,
      });
    } else if (type === 'right') {
      setPosition({
        top: anchorRect.top,
        left: anchorRect.left + anchorRect.width + 10,
      });
    }
  }, [anchorEl]);

  return { position };
};
