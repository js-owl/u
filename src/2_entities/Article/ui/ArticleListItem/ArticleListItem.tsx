import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { RoutePath } from '@/1_shared/config/routeConfig/routeConfig';
import EyeIcon from '@/1_shared/assets/icons/eye-20-20.svg';
import { classNames } from '@/1_shared/libs/classNames/classNames';
import { AppLink } from '@/1_shared/ui/AppLink/AppLink';
import { Text } from '@/1_shared/ui/Text/Text';
import { Icon } from '@/1_shared/ui/Icon/Icon';
import { Card } from '@/1_shared/ui/Card/Card';
import { Avatar } from '@/1_shared/ui/Avatar/Avatar';
import { Button } from '@/1_shared/ui/Button/Button';

import { ArticleBlockType, ArticleView } from '../../model/const/consts';
import { Article, ArticleTextBlock } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';
// ----- imports -----

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view, target } = props;
  const { t } = useTranslation();
  const types = <Text text={article.type.join(', ')} className={cls.types} />;
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          {types}
          <img src={article.img} className={cls.img} alt={article.title} />
          {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />}
          <div className={cls.footer}>
            <AppLink to={RoutePath.article_details + article.id} target={target}>
              <Button>{t('read more')}</Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      to={RoutePath.article_details + article.id}
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      target={target}
    >
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <img alt={article.title} src={article.img} className={cls.img} />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </AppLink>
  );
});
