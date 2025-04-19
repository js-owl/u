import { Button } from '@/1_shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/1_shared/libs/classNames/classNames';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();
  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('error')}</p>
      <Button onClick={reloadPage}>{t('update_page')}</Button>
    </div>
  );
};
