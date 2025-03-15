import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "1_shared/libs/classNames/classNames";
import cls from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
  className?: string;
}
const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation("articles");

  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      articles page
    </div>
  );
};
export default memo(ArticlesPage);
