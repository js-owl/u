import { memo, ReactNode } from 'react';
import { classNames, Mods } from '1_shared/libs/classNames/classNames';
import { useTheme } from '7_app/providers/ThemeProvider';
import { useModal } from '1_shared/libs/hooks/useModal/useModal';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import cls from './Drawer.module.scss';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  lazy?: boolean;
  onClose?: () => void;
}
export const Drawer = memo((props: DrawerProps) => {
  const { className, children, isOpen, lazy, onClose } = props;
  const { close, isClosing, isMounted } = useModal({ isOpen, animationDelay: 300, onClose });
  const { theme } = useTheme();

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  };

  if (lazy && !isMounted) return null;

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
});
