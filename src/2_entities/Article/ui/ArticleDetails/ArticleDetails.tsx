import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import EyeIcon from '1_shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '1_shared/assets/icons/calendar-20-20.svg';
import { classNames } from '1_shared/libs/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '1_shared/libs/c/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '1_shared/libs/hooks/useAppDispatch/useAppDispatch';
import { Text, TextAlign, TextSize } from '1_shared/ui/Text/Text';
import { Skeleton } from '1_shared/ui/Skeleton/Skeleton';
import { Avatar } from '1_shared/ui/Avatar/Avatar';
import { Icon } from '1_shared/ui/Icon/Icon';
import { HStack, VStack } from '1_shared/ui/Stack';

import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from '../../model/selectors/articleDetails';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const article = useSelector(getArticleDetailsData);
  // const isLoading = true;
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.CODE:
      return <ArticleCodeBlockComponent key={block.id} block={block} />;
    case ArticleBlockType.IMAGE:
      return <ArticleImageBlockComponent key={block.id} block={block} />;
    case ArticleBlockType.TEXT:
      return <ArticleTextBlockComponent key={block.id} block={block} />;
    default:
      return null;
    }
  }, []);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
        <Skeleton width={300} height={32} />
        <Skeleton width={600} height={24} />
        <Skeleton width="100%" height={200} />
        <Skeleton width="100%" height={200} />
      </>
    );
  } else if (error) {
    content = <Text title={t(error)} align={TextAlign.CENTER} />;
  } else {
    content = (
      <>
        <HStack justify="center" max>
          <Avatar size={200} src={article?.img} className={cls.avatar} />
        </HStack>
        <VStack gap="4" max>
          <Text title={article?.title} text={article?.subtitle} size={TextSize.L} />
          <HStack gap="8">
            <Icon Svg={EyeIcon} />
            <Text text={String(article?.views)} />
          </HStack>
          <HStack gap="8">
            <Icon Svg={CalendarIcon} />
            <Text text={article?.createdAt} />
          </HStack>
        </VStack>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <VStack gap="16" className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
});
