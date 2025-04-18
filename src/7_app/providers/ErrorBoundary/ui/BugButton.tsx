import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/1_shared/ui/Button/Button';

export const BugButton = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);
  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);
  return <Button onClick={onThrow}>{t('throw error')}</Button>;
};
