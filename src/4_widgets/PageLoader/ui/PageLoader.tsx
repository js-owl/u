import { classNames } from '@/1_shared/libs/classNames/classNames';
import { Loader } from '@/1_shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}
export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};
