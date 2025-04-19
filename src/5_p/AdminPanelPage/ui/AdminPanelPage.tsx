import { useTranslation } from 'react-i18next';
import { Page } from '@/4_widgets/Page/Page';

const AdminPanelPage = () => {
  const { t } = useTranslation('about');
  return <Page>{t('admin page')} </Page>;
};
export default AdminPanelPage;
