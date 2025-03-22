import { memo, useCallback } from "react";
import { Route, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import EyeIcon from "1_shared/assets/icons/eye-20-20.svg";
import { RoutePath } from "1_shared/config/routeConfig/routeConfig";
import { classNames } from "1_shared/libs/classNames/classNames";
import { Text } from "1_shared/ui/Text/Text";
import { Icon } from "1_shared/ui/Icon/Icon";
import { Card } from "1_shared/ui/Card/Card";
import { Avatar } from "1_shared/ui/Avatar/Avatar";
import { Button } from "1_shared/ui/Button/Button";

import cls from "./ArticleListItem.module.scss";
import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
} from "../../model/types/article";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
// ----- imports -----

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();
  const types = <Text text={article.type.join(", ")} className={cls.types} />;
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id);
  }, [article.id, navigate]);

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type == ArticleBlockType.TEXT
    ) as ArticleTextBlock;

    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          {types}
          <img src={article.img} className={cls.img} alt={article.title} />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={cls.textBlock}
            />
          )}
          <div className={cls.footer}>
            <Button onClick={onOpenArticle}>{t("read more")}</Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card className={cls.card} onClick={onOpenArticle}>
        <div className={cls.imageWrapper}>
          <img alt={article.title} src={article.img} className={cls.img} />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </div>
  );
});
