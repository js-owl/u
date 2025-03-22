import { memo } from "react";
import { classNames } from "1_shared/libs/classNames/classNames";
import { Text } from "1_shared/ui/Text/Text";
import { Icon } from "1_shared/ui/Icon/Icon";
import EyeIcon from "1_shared/assets/icons/eye-20-20.svg";

import cls from "./ArticleListItem.module.scss";
import { Article, ArticleView } from "../../model/types/article";
import { Card } from "1_shared/ui/Card/Card";

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
        <Card className={cls.card}>
          <div className={cls.imageWrapper}>
            <img alt={article.title} src={article.img} className={cls.img} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <div className={cls.infoWrapper}>
            <Text text={article.type.join(", ")} className={cls.types} />
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
          </div>
          <Text text={article.title} className={cls.title} />
        </Card>
      </div>
    );
  }
);
