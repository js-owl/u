import { classNames } from "1_shared/libs/classNames/classNames";
import cls from "./ArticleDetails.module.scss";

interface ArticleDetailsProps {
  className?: string;
}

export const ArticleDetails = ({ className }: ArticleDetailsProps) => {
  return (
    <div className={classNames(cls.ArticleDetails, {}, [className])}>
      ArticleDetails
    </div>
  );
};
