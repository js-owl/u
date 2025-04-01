import { memo } from "react";
import { classNames } from "1_shared/libs/classNames/classNames";
import cls from "./ArticleEditPage.module.scss";

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
  return (
    <div className={classNames(cls.ArticleEditPage, {}, [className])}>
      ArticleEditPage
    </div>
  );
});
export default ArticleEditPage;
