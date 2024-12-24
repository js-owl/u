import { classNames } from "1_shared/libs/classNames/classNames";
import cls from "./PageLoader.module.scss";
import { Loader } from "1_shared/ui/Loader/Loader";
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
