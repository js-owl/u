import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "1_shared/libs/classNames/classNames";
import cls from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
  className?: string;
}
const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation("articles");

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      article details
    </div>
  );
};
export default memo(ArticleDetailsPage);
