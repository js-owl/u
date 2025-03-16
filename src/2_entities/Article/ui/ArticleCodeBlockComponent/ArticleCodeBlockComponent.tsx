import { memo } from "react";
import { classNames } from "1_shared/libs/classNames/classNames";
import cls from "./ArticleCodeBlockComponent.module.scss";
interface ArticleCodeBlockComponentProps {
  className?: string;
}
export const ArticleCodeBlockComponent = memo(
  ({ className }: ArticleCodeBlockComponentProps) => {
    return (
      <div
        className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}
      >
        ArticleCodeBlockComponent
      </div>
    );
  }
);
