import { memo, ReactNode } from 'react';
import { classNames, Mods } from '1_shared/libs/classNames/classNames';
import { useTheme } from '7_app/providers/ThemeProvider';
import { Portal } from '../Portal/Portal';
import cls from './Drawer.module.scss';
import { Overlay } from '../Overlay/Overlay';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}
export const Drawer = memo((props: DrawerProps) => {
  const { className, children, isOpen, onClose } = props;
  const { theme } = useTheme();
  const mods: Mods = { [cls.opened]: isOpen };

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
        <Overlay onClick={onClose} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
});
