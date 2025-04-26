import { useTranslation } from 'react-i18next';
import { Page } from '@/4_widgets/Page';

const MainPage = () => {
  const { t } = useTranslation();
  return <Page>{t('main page')}</Page>;
};
export default MainPage;
