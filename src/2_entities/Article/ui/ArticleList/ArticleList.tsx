import { memo } from "react";
import { classNames } from "1_shared/libs/classNames/classNames";
import { Article, ArticleView } from "2_entities/Article/model/types/article";
import cls from "./ArticleList.module.scss";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";

interface ArticleListProps {
  className?: string;
  isLoading?: boolean;
  articles: Article[];
  view?: ArticleView;
}

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, isLoading, articles, view = ArticleView.SMALL } = props;
  const renderArticle = (article: Article) => (
    <ArticleListItem
      key={article.id}
      article={article}
      view={view}
      className={cls.card}
    />
  );

  return (
    <div className={classNames(cls.ArticleList, {}, [className])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
    </div>
  );
});
