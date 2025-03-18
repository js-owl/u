import { memo } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { classNames } from "1_shared/libs/classNames/classNames";
import { Text } from "1_shared/ui/Text/Text";
import { ArticleDetails } from "2_entities/Article";
import { CommentList } from "2_entities/Comment";
import cls from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
  className?: string;
}
const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation("article-details");
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t("article not found")}
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
      <Text className={cls.commentTitle} title={t("comments")} />
      <CommentList
        isLoading={true}
        comments={[
          {
            id: "1",
            text: "c1",
            user: {
              id: "1",
              username: "alex",
              avatar:
                "https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg",
            },
          },
          {
            id: "2",
            text: "c2",
            user: {
              id: "2",
              username: "bob",
              avatar:
                "https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg",
            },
          },
        ]}
      />
    </div>
  );
};
export default memo(ArticleDetailsPage);
