import { memo } from "react";
import { classNames } from "1_shared/libs/classNames/classNames";
import cls from "./ArticleImageBlockComponent.module.scss";
interface ArticleImageBlockComponentProps {
  className?: string;
}
export const ArticleImageBlockComponent = memo(
  ({ className }: ArticleImageBlockComponentProps) => {
    return (
      <div
        className={classNames(cls.ArticleImageBlockComponent, {}, [className])}
      >
        ArticleImageBlockComponent
      </div>
    );
  }
);
