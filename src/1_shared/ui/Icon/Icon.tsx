import { classNames } from '1_shared/libs/classNames/classNames';
import { memo } from 'react';
import cls from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

export const Icon = memo(({ className, Svg, inverted }: IconProps) => {
  return <Svg className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} />;
});
