import { HtmlHTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/1_shared/libs/classNames/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined'
}

interface CardProps extends HtmlHTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  theme?: CardTheme;
  max?: boolean;
}

export const Card = memo(({ className, children, theme = CardTheme.NORMAL, max, ...otherProps }: CardProps) => {
  return (
    <div className={classNames(cls.Card, { [cls.max]: max }, [className, cls[theme]])} {...otherProps}>
      {children}
    </div>
  );
});
