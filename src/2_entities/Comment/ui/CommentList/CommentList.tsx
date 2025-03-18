import { memo } from "react";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import { classNames } from "1_shared/libs/classNames/classNames";
import { Text } from "1_shared/ui/Text/Text";
import { Comment } from "2_entities/Comment/model/types/comment";
import cls from "./CommentList.module.scss";
import { CommentCard } from "../CommentCard/CommentCard";

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo(
  ({ className, comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation();

    return (
      <div className={classNames(cls.CommentList, {}, [className])}>
        {comments?.length ? (
          comments.map((c: Comment) => (
            <CommentCard className={cls.comment} comment={c} />
          ))
        ) : (
          <Text text={t("comments absence")} />
        )}
      </div>
    );
  }
);
