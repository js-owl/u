import { useTranslation } from 'react-i18next';
import { Page } from '@/4_widgets/Page/Page';
import { Counter } from '@/2_entities/Counter';
import { HStack } from '@/1_shared/ui/Stack';
import { ListBox } from '@/1_shared/ui/Popups/components/ListBox/ListBox';

console.log('|-MainPage');
const MainPage = () => {
  const { t } = useTranslation();
  return (
    <Page>
      {t('main page')}
      <Counter />
    </Page>
  );
};
export default MainPage;
