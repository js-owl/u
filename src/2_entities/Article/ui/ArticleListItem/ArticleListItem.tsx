import { memo } from "react";
import { classNames } from "1_shared/libs/classNames/classNames";
import cls from "./ArticleListItem.module.scss";
import { Article, ArticleView } from "../../model/types/article";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = memo(
  ({ className, article, view }: ArticleListItemProps) => {
    if (view === ArticleView.BIG) {
      return (
        <div
          className={classNames(cls.ArticleListItem, {}, [
            className,
            cls[view],
          ])}
        >
          {article.title}
        </div>
      );
    }

    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        {article.title}
      </div>
    );
  }
);
