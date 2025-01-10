import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children?: ReactNode; // то, что телепортируется
  element?: HTMLElement; // куда телепортируется
}

export const Portal = (props: PortalProps) => {
  const { children, element = document.body } = props;
  return createPortal(children, element);
};
