import { memo } from 'react';
import { classNames } from '1_shared/libs/classNames/classNames';
import cls from './HStack.module.scss';

interface HStackProps {
  className?: string;
}
export const HStack = memo(({ className }: HStackProps) => {
  return <div className={classNames(cls.HStack, {}, [className])} />;
});
