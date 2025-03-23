import { memo } from "react";
import { useSelector } from "react-redux";
import { classNames } from "1_shared/libs/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "1_shared/libs/c/DynamicModuleLoader/DynamicModuleLoader";
import { useInitialEffect } from "1_shared/libs/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "1_shared/libs/hooks/useAppDispatch/useAppDispatch";

import { Article, ArticleList } from "2_entities/Article";
import { ArticleView } from "2_entities/Article/model/types/article";
import cls from "./ArticlesPage.module.scss";
import {
  articlesPageReducer,
  getArticles,
} from "../../model/slices/articlePageSlice";
import { fetchArticlesList } from "../../model/serviices/fetchArticlesList/fetchArticlesList";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);

  useInitialEffect(() => {
    dispatch(fetchArticlesList());
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ArticlesPage, {}, [className])}>
        <ArticleList
          isLoading={isLoading}
          view={ArticleView.SMALL}
          articles={articles}
        />
      </div>
    </DynamicModuleLoader>
  );
};
export default memo(ArticlesPage);
