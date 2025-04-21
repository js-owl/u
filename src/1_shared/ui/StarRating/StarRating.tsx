import { memo, useState } from 'react';
import StarIcon from '@/1_shared/assets/icons/star.svg';
import { classNames } from '@/1_shared/libs/classNames/classNames';
import { Icon } from '../Icon/Icon';
import cls from './StarRating.module.scss';

interface StarRatingProps {
  className?: string;
  size?: number;
  selectedStars?: number;
  onSelect?: (starsCount: number) => void;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
  const { className, size = 30, selectedStars = 0, onSelect } = props;
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));
  const [currentStarCount, setCurrentStarCount] = useState(0);

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarCount(starsCount);
    }
  };
  const onLeave = () => () => {
    if (!isSelected) {
      setCurrentStarCount(0);
    }
  };
  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <div className={classNames(cls.StarRating, {}, [className])}>
      {stars.map((starNumber) => (
        <Icon
          Svg={StarIcon}
          key={starNumber}
          className={classNames(cls.starIcon, { [cls.selected]: isSelected }, [
            currentStarCount >= starNumber ? cls.hovered : cls.normal
          ])}
          width={size}
          height={size}
          onMouseLeave={onLeave}
          onMouseEnter={onHover(starNumber)}
          onClick={onClick(starNumber)}
        />
      ))}
    </div>
  );
});
