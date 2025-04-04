import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { classNames } from '1_shared/libs/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList
} from '1_shared/libs/c/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from '1_shared/libs/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '1_shared/libs/hooks/useAppDispatch/useAppDispatch';
import { Page } from '4_widgets/Page/Page';

import { ArticleList } from '2_entities/Article';
import { useSearchParams } from 'react-router-dom';
import cls from './ArticlesPage.module.scss';
import {
  articlesPageReducer,
  getArticles
} from '../../model/slices/articlePageSlice';
import {
  getArticlesPageError,
  getArticlesPageHasMore,
  getArticlesPageInited,
  getArticlesPageIsLoading,
  getArticlesPageNum,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors';
import { fetchNextArticlesPage } from '../../model/serviices/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/serviices/initArticlesPage/initArticlesPage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const page = useSelector(getArticlesPageNum);
  const hasMore = useSelector(getArticlesPageHasMore);
  const error = useSelector(getArticlesPageError);
  const inited = useSelector(getArticlesPageInited);
  const [searchParams] = useSearchParams();

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
        <ArticlesPageFilters />
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles}
          className={cls.list}
        />
      </Page>
    </DynamicModuleLoader>
  );
};
export default memo(ArticlesPage);
