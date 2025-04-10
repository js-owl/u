import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from '1_shared/libs/classNames/classNames';
import { VStack } from '1_shared/ui/Stack/VStack/VStack';
import { Text } from '1_shared/ui/Text/Text';
import { EditableProfileCard } from '3_features/editableProfileCard';
import { Page } from '4_widgets/Page/Page';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('profile');

  if (!id) {
    return <Text text={t('profile not found')} />;
  }

  return (
    <Page className={classNames('', {}, [className])}>
      <VStack gap="16" max>
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};
export default ProfilePage;
