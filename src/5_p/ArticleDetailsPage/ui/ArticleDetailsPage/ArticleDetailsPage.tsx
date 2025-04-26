import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/1_shared/libs/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/1_shared/libs/c/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from '@/1_shared/ui/Stack';

import { ArticleDetails } from '@/2_entities/Article';
import { ArticleRating } from '@/3_features/articleRating';
import { ArticleRecommendationsList } from '@/3_features/articleRecommendationsList';
import { Page } from '@/4_widgets/Page';

import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import cls from './ArticleDetailsPage.module.scss';
// ----- imports -----

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailPage: articleDetailsPageReducer
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article-details');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>{t('article not found')}</Page>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <VStack gap="16" max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <ArticleRating articleId={id} />
          <ArticleRecommendationsList />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};
export default memo(ArticleDetailsPage);
