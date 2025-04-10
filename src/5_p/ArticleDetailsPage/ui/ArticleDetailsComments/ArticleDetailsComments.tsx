import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useInitialEffect } from '1_shared/libs/hooks/useInitialEffect/useInitialEffect';
import { classNames } from '1_shared/libs/classNames/classNames';
import { Text, TextSize } from '1_shared/ui/Text/Text';
import { CommentList } from '2_entities/Comment';
import { AddCommentForm } from '3_features/addCommentForm';

import { getArticleComments } from '../../model/slices/ArticleDetailsCommentsSlice';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
// ----- imports -----

interface ArticleDetailsCommentsProps {
  className?: string;
  id: string;
}
export const ArticleDetailsComments = memo(({ className, id }: ArticleDetailsCommentsProps) => {
  const { t } = useTranslation('article-details');
  const dispatch = useDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleRecommendationsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  return (
    <div className={classNames('', {}, [className])}>
      <Text size={TextSize.L} title={t('comments')} />
      <AddCommentForm onSendComment={onSendComment} />
      <CommentList isLoading={commentsIsLoading} comments={comments} />
    </div>
  );
});
