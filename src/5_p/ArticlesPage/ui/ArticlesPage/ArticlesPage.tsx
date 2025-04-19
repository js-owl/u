import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { classNames } from '@/1_shared/libs/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/1_shared/libs/c/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from '@/1_shared/libs/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/1_shared/libs/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/4_widgets/Page/Page';

import { articlesPageReducer } from '../../model/slices/articlePageSlice';
import { initArticlesPage } from '../../model/serviices/initArticlesPage/initArticlesPage';
import { fetchNextArticlesPage } from '../../model/serviices/fetchNextArticlesPage/fetchNextArticlesPage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import cls from './ArticlesPage.module.scss';
// ----- imports -----

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlesPage, {}, [className])}>
        <ArticlesPageFilters />
        <ArticleInfiniteList className={cls.list} />
      </Page>
    </DynamicModuleLoader>
  );
};
export default memo(ArticlesPage);
