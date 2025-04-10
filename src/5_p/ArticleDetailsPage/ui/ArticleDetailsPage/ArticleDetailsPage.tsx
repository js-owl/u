import { memo, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from '1_shared/libs/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '1_shared/libs/c/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from '1_shared/libs/hooks/useInitialEffect/useInitialEffect';
import { Button } from '1_shared/ui/Button/Button';
import { Text, TextSize } from '1_shared/ui/Text/Text';
import { VStack } from '1_shared/ui/Stack';

import { ArticleDetails, ArticleList } from '2_entities/Article';
import { CommentList } from '2_entities/Comment';
import { ArticleRecommendationsList } from '3_features/articleRecommendationsList';
import AddCommentForm from '3_features/addCommentForm/ui/AddCommentForm/AddCommentForm';
import { Page } from '4_widgets/Page/Page';

import { articleDetailsPageReducer } from '5_p/ArticleDetailsPage/model/slices';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/ArticleDetailsCommentsSlice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
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
  const dispatch = useDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  if (!id) {
    return <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>{t('article not found')}</Page>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <VStack gap="16" max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <ArticleRecommendationsList />
          <Text size={TextSize.L} className={cls.commentTitle} title={t('comments')} />
          <AddCommentForm onSendComment={onSendComment} />
          <CommentList isLoading={commentsIsLoading} comments={comments} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};
export default memo(ArticleDetailsPage);
