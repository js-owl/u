import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/1_shared/libs/classNames/classNames';
import { VStack } from '@/1_shared/ui/Stack';
import { Text, TextSize } from '@/1_shared/ui/Text/Text';
import { ArticleList } from '@/2_entities/Article';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { isLoading, data: articles, error } = useArticleRecommendationsList(3);

  if (isLoading || error || !articles) {
    return null;
  }

  return (
    <VStack gap="8" className={classNames('', {}, [className])}>
      <Text size={TextSize.L} title={t('recommend')} />
      <ArticleList articles={articles} target="_blank" />
    </VStack>
  );
});
