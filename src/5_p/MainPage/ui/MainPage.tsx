import { useTranslation } from 'react-i18next';
import { StarRating } from '@/1_shared/ui/StarRating/StarRating';
import { Page } from '@/4_widgets/Page/Page';

console.log('|-MainPage');
const MainPage = () => {
  const { t } = useTranslation();
  return (
    <Page>
      {t('main page')}
      <StarRating />
    </Page>
  );
};
export default MainPage;
