import { useParams } from 'react-router-dom';
import { classNames } from '@/1_shared/libs/classNames/classNames';
import { VStack } from '@/1_shared/ui/Stack/VStack/VStack';
import { EditableProfileCard } from '@/3_features/editableProfileCard';
import { Page } from '@/4_widgets/Page/Page';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>();

  return (
    <Page className={classNames('', {}, [className])}>
      <VStack gap="16" max>
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};
export default ProfilePage;
