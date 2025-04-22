import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { RatingCard } from '@/2_entities/Rating';

interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

export const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, articleId } = props;
  const { t } = useTranslation();

  return (
    <RatingCard className={className} title={t('access the article')} feedbackTitle={t('Оставьте свой отзыв')} hasFeedback />
  );
});
