import { memo } from 'react';
import { classNames } from '1_shared/libs/classNames/classNames';
import ListIcon from '1_shared/assets/icons/list-24-24.svg';
import TiledIcon from '1_shared/assets/icons/tiled-24-24.svg';
import { Button, ButtonTheme } from '1_shared/ui/Button/Button';
import { Icon } from '1_shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '../../model/types/article';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  { view: ArticleView.SMALL, icon: TiledIcon },
  { view: ArticleView.BIG, icon: ListIcon }
];

export const ArticleViewSelector = memo(
  ({ className, view, onViewClick }: ArticleViewSelectorProps) => {
    const onClick = (newView: ArticleView) => () => {
      onViewClick?.(newView);
    };

    return (
      <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
        {viewTypes.map((viewType) => (
          <Button
            theme={ButtonTheme.CLEAR}
            key={viewType.view}
            onClick={onClick(viewType.view)}
          >
            <Icon
              Svg={viewType.icon}
              className={classNames('', {
                [cls.notSelected]: viewType.view !== view
              })}
            />
          </Button>
        ))}
      </div>
    );
  }
);
