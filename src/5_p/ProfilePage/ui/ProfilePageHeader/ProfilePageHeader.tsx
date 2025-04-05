import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '1_shared/libs/classNames/classNames';
import { Button, ButtonTheme } from '1_shared/ui/Button/Button';
import { Text } from '1_shared/ui/Text/Text';
import { HStack } from '1_shared/ui/Stack/HStack/HStack';

import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from '2_entities/Profile';
import { getUserAuthData } from '2_entities/User';

interface ProfilePageHeaderProps {
  className?: string;
}
export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);
  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);
  const onSave = useCallback(() => {
    console.log('ProfilePageHeader - onSave()');
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack max justify="between" className={classNames('', {}, [className])}>
      <Text title={t('profile')} />
      {canEdit && (
        <div>
          {readonly ? (
            <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
              {t('edit')}
            </Button>
          ) : (
            <HStack gap="8">
              {' '}
              <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
                {t('cancel')}
              </Button>
              <Button theme={ButtonTheme.OUTLINE} onClick={onSave}>
                {t('save')}
              </Button>
            </HStack>
          )}
        </div>
      )}
    </HStack>
  );
};
