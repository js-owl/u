// const NotFoundPage = () => {
//   const { t } = useTranslation();
//   return <div className="">{t("not found page")}</div>;
// };
// export default NotFoundPage;

import { classNames } from '1_shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}
export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      {t('not found page')}
    </div>
  );
};
