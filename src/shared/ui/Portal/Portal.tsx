import { ReactNode } from 'react';

import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  element?: HTMLElement;
}

export const Portal = ({ element = document.body, children }: PortalProps) =>
  createPortal(children, element);

const modalRoot = document.getElementById('modal-root')!;

export function PortalModal({ children }: { children: React.ReactNode }) {
  return createPortal(children, modalRoot);
}

const tooltipRoot = document.getElementById('tooltip-root')!;

export function PortalTooltip({ children }: { children: React.ReactNode }) {
  return createPortal(children, tooltipRoot);
}
