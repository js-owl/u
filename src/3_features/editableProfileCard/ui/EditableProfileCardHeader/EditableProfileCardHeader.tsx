import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from '1_shared/libs/classNames/classNames';
import { Button, ButtonTheme } from '1_shared/ui/Button/Button';
import { Text } from '1_shared/ui/Text/Text';
import { HStack } from '1_shared/ui/Stack/HStack/HStack';
import { getUserAuthData } from '2_entities/User';

import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';

interface EditableProfileCardHeaderProps {
  className?: string;
}
export const EditableProfileCardHeader = ({ className }: EditableProfileCardHeaderProps) => {
  const { t } = useTranslation('profile');
  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;
  const readonly = useSelector(getProfileReadonly);

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
            <Button theme={ButtonTheme.OUTLINE} data-testid="EditableProfileCardHeader.EditButton" onClick={onEdit}>
              {t('edit')}
            </Button>
          ) : (
            <HStack gap="8">
              {' '}
              <Button
                theme={ButtonTheme.OUTLINE_RED}
                data-testid="EditableProfileCardHeader.CancelButton"
                onClick={onCancelEdit}
              >
                {t('cancel')}
              </Button>
              <Button theme={ButtonTheme.OUTLINE} data-testid="EditableProfileCardHeader.SaveButton" onClick={onSave}>
                {t('save')}
              </Button>
            </HStack>
          )}
        </div>
      )}
    </HStack>
  );
};
