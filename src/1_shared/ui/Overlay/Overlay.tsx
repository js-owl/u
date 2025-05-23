import { memo } from 'react';
import { classNames } from '@/1_shared/libs/classNames/classNames';
import cls from './Overlay.module.scss';

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}
export const Overlay = memo(({ className, onClick }: OverlayProps) => {
  return <div className={classNames(cls.Overlay, {}, [className])} onClick={onClick} />;
});
