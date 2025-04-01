import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { RoutePath } from "1_shared/config/routeConfig/routeConfig";
import { classNames } from "1_shared/libs/classNames/classNames";
import { Button } from "1_shared/ui/Button/Button";
import { getUserAuthData } from "2_entities/User";
import { getArticleDetailsData } from "2_entities/Article";
import { getCanEditArticle } from "5_p/ArticleDetailsPage/model/selectors/article";
import cls from "./ArticleDetailsPageHeader.module.scss";

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo(
  ({ className }: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation("article-details");
    const navigate = useNavigate();
    const userData = useSelector(getUserAuthData);
    const article = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getCanEditArticle);

    const onBackToList = useCallback(() => {
      navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
      navigate(`${RoutePath.article_details}${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
      <div
        className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}
      >
        <Button onClick={onBackToList}>{t("back to list")}</Button>
        {canEdit && (
          <Button className={cls.editBtn} onClick={onEditArticle}>
            {t("edit")}
          </Button>
        )}
      </div>
    );
  }
);
