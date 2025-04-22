import { useTranslation } from 'react-i18next';
import { Page } from '@/4_widgets/Page/Page';
import { RatingCard } from '@/2_entities/Rating';

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <Page>
      {t('main page')}
      <RatingCard title={t('Как Вам статья?')} feedbackTitle={t('Оставьте отзыв о статье')} hasFeedback />
    </Page>
  );
};
export default MainPage;
