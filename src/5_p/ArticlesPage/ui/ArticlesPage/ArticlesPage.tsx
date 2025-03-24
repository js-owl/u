import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { classNames } from "1_shared/libs/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "1_shared/libs/c/DynamicModuleLoader/DynamicModuleLoader";
import { useInitialEffect } from "1_shared/libs/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "1_shared/libs/hooks/useAppDispatch/useAppDispatch";

import { Article, ArticleList, ArticleViewSelector } from "2_entities/Article";
import { ArticleView } from "2_entities/Article/model/types/article";
import cls from "./ArticlesPage.module.scss";
import {
  articlesPageActions,
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

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  useInitialEffect(() => {
    dispatch(fetchArticlesList());
    dispatch(articlesPageActions.initState());
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ArticlesPage, {}, [className])}>
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </div>
    </DynamicModuleLoader>
  );
};
export default memo(ArticlesPage);
