import { HtmlHTMLAttributes, memo, ReactNode } from "react";
import { classNames } from "1_shared/libs/classNames/classNames";

import cls from "./Card.module.scss";

interface CardProps extends HtmlHTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

export const Card = memo(
  ({ className, children, ...otherProps }: CardProps) => {
    return (
      <div className={classNames(cls.Card, {}, [className])} {...otherProps}>
        {children}
      </div>
    );
  }
);
