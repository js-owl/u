import { memo } from "react";
import { classNames } from "1_shared/libs/classNames/classNames";
import { Avatar } from "1_shared/ui/Avatar/Avatar";
import { Text } from "1_shared/ui/Text/Text";
import { Comment } from "2_entities/Comment/model/types/comment";
import cls from "./CommentCard.module.scss";

interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo(
  ({ className, comment, isLoading }: CommentCardProps) => {
    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
          <Avatar size={30} />
          <Text className={cls.username} title={comment.user.username} />
        </div>
        <Text className={cls.text} text={comment.text} />
      </div>
    );
  }
);
