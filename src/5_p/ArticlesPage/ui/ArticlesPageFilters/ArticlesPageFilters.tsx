import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { useAppDispatch } from "1_shared/libs/hooks/useAppDispatch/useAppDispatch";
import { classNames } from "1_shared/libs/classNames/classNames";
import { Card } from "1_shared/ui/Card/Card";
import { Input } from "1_shared/ui/Input/Input";
import { SortOrder } from "1_shared/types";

import {
  ArticleSortField,
  ArticleView,
  ArticleViewSelector,
} from "2_entities/Article";
import { ArticleSortSelector } from "2_entities/Article/ui/ArticleSortSelector/ArticleSortSelector";
import {
  getArticlesPageOrder,
  getArticlesPageSort,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
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

    const onChangeView = useCallback(
      (view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
      },
      [dispatch]
    );

    const onChangeSort = useCallback(
      (newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
      },
      [dispatch]
    );

    const onChangeOrder = useCallback(
      (newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
      },
      [dispatch]
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
          <Input placeholder={t("search")} />
        </Card>
      </div>
    );
  }
);
