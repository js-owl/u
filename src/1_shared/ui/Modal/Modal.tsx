import { ReactNode } from 'react';
import { classNames, Mods } from '@/1_shared/libs/classNames/classNames';
import { useModal } from '@/1_shared/libs/hooks/useModal/useModal';
import { useTheme } from '@/7_app/providers/ThemeProvider';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = ({ className, children, isOpen, onClose, lazy }: ModalProps) => {
  const { close, isClosing, isMounted } = useModal({ isOpen, animationDelay: ANIMATION_DELAY, onClose });

  const { theme } = useTheme();

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  };

  if (lazy && !isMounted) return null;

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}>
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};
