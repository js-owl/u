import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '1_shared/libs/classNames/classNames';
import { Text } from '1_shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentList, {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    );
  }

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length ? (
        comments.map((c: Comment) => <CommentCard key={c.id} isLoading={isLoading} className={cls.comment} comment={c} />)
      ) : (
        <Text text={t('comments absence')} />
      )}
    </div>
  );
});
