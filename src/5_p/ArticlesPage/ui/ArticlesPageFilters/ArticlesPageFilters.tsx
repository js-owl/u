import { memo, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { useAppDispatch } from "1_shared/libs/hooks/useAppDispatch/useAppDispatch";
import { classNames } from "1_shared/libs/classNames/classNames";
import { Card } from "1_shared/ui/Card/Card";
import { Input } from "1_shared/ui/Input/Input";
import { SortOrder } from "1_shared/types";
import { useDebounce } from "1_shared/libs/hooks/useDebounce/useDebounce";
import { TabItem, Tabs } from "1_shared/ui/Tabs/Tabs";

import {
  ArticleSortField,
  ArticleView,
  ArticleViewSelector,
} from "2_entities/Article";
import { ArticleSortSelector } from "2_entities/Article/ui/ArticleSortSelector/ArticleSortSelector";
import { ArticleType } from "2_entities/Article/model/types/article";

import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { fetchArticlesList } from "../../model/serviices/fetchArticlesList/fetchArticlesList";
import { articlesPageActions } from "../../model/slices/articlePageSlice";
import cls from "./ArticlesPageFilters.module.scss";

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = memo(
  ({ className }: ArticlesPageFiltersProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
      dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);
    const debouncedFetchData = useDebounce(fetchData, 1000);

    const onChangeView = useCallback(
      (view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
      },
      [dispatch]
    );

    const onChangeSort = useCallback(
      (newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
      },
      [dispatch, fetchData]
    );

    const onChangeOrder = useCallback(
      (newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
      },
      [dispatch, fetchData]
    );

    const onChangeSearch = useCallback(
      (search: string) => {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
      },
      [dispatch, debouncedFetchData]
    );

    const onChangeType = useCallback(
      (tab: TabItem) => {
        dispatch(articlesPageActions.setType(tab.value as ArticleType));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
      },
      [dispatch, fetchData]
    );

    const typeTabs = useMemo<TabItem[]>(
      () => [
        { value: ArticleType.ALL, content: t("ALL") },
        { value: ArticleType.IT, content: t("IT") },
        { value: ArticleType.ECONOMICS, content: t("ECONOMICS") },
        { value: ArticleType.SCIENCE, content: t("SCIENCE") },
      ],
      [t]
    );

    return (
      <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
        <div className={cls.sortWrapper}>
          <ArticleSortSelector
            sort={sort}
            order={order}
            onChangeSort={onChangeSort}
            onChangeOrder={onChangeOrder}
          />
          <ArticleViewSelector view={view} onViewClick={onChangeView} />
        </div>
        <Card className={cls.search}>
          <Input
            value={search}
            onChange={onChangeSearch}
            placeholder={t("search")}
          />
        </Card>
        <Tabs
          tabs={typeTabs}
          value={type}
          onTabClick={onChangeType}
          className={cls.tabs}
        />
      </div>
    );
  }
);
