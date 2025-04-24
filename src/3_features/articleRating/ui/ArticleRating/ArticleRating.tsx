import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Skeleton } from '@/1_shared/ui/Skeleton/Skeleton';
import { getUserAuthData } from '@/2_entities/User';
import { RatingCard } from '@/2_entities/Rating';
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, articleId } = props;
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);
  const { isLoading, data } = useGetArticleRating({ articleId, userId: userData?.id ?? '' });
  const [rateArticleMutation] = useRateArticle();
  const rating = data?.[0];

  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateArticleMutation({ userId: userData?.id ?? '', articleId, rate: starsCount, feedback });
      } catch (e) {
        console.warn(e);
      }
    },
    [articleId, rateArticleMutation, userData?.id]
  );
  const onCancel = useCallback(
    (starsCount: number) => {
      handleRateArticle(starsCount);
    },
    [handleRateArticle]
  );
  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateArticle(starsCount, feedback);
    },
    [handleRateArticle]
  );

  if (isLoading) {
    return <Skeleton width="100%" border="8px" height="120px" />;
  }

  return (
    <RatingCard
      rate={rating?.rate}
      className={className}
      title={t('access the article')}
      feedbackTitle={t('Оставьте свой отзыв')}
      hasFeedback
      onCancel={onCancel}
      onAccept={onAccept}
    />
  );
});
export default ArticleRating;
