import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "1_shared/libs/classNames/classNames";
import cls from "./ArticleSortSelector.module.scss";
import { Select, SelectOption } from "1_shared/ui/Select/Select";
import { ArticleSortField } from "2_entities/Article/model/types/article";
import { SortOrder } from "1_shared/types";

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeSort: (newsort: ArticleSortField) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
}

export const ArticleSortSelector = memo(
  ({
    className,
    sort,
    order,
    onChangeSort,
    onChangeOrder,
  }: ArticleSortSelectorProps) => {
    const { t } = useTranslation();

    const sortFieldOptions = useMemo<SelectOption[]>(
      () => [
        { value: ArticleSortField.CREATED, content: t("created date") },
        { value: ArticleSortField.TITLE, content: t("title") },
        { value: ArticleSortField.VIEWS, content: t("views") },
      ],
      [t]
    );

    const orderOptions = useMemo<SelectOption[]>(
      () => [
        { value: "asc", content: t("ascending") },
        { value: "desc", content: t("descending") },
      ],
      [t]
    );

    const changeSortHandler = useCallback(
      (newSort: string) => {
        onChangeSort(newSort as ArticleSortField);
      },
      [onChangeSort]
    );

    const changeOrderHandler = useCallback(
      (newOrder: string) => {
        onChangeOrder(newOrder as SortOrder);
      },
      [onChangeOrder]
    );

    return (
      <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
        <Select
          options={sortFieldOptions}
          label={t("sort by")}
          value={sort}
          onChange={changeSortHandler}
        />
        <Select
          options={orderOptions}
          label={t("by")}
          value={order}
          onChange={changeOrderHandler}
          className={cls.order}
        />
      </div>
    );
  }
);
