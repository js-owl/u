import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RoutePath } from '1_shared/config/routeConfig/routeConfig';
import { classNames } from '1_shared/libs/classNames/classNames';
import { Dropdown } from '1_shared/ui/Popups';
import { Avatar } from '1_shared/ui/Avatar/Avatar';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '2_entities/User';

interface AvatarDropdownProps {
  className?: string;
}
export const AvatarDropdown = memo(({ className }: AvatarDropdownProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const isAdminPanelAvailable = isAdmin || isManager;

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      className={classNames('', {}, [className])}
      direction="bottom left"
      items={[
        ...(isAdminPanelAvailable ? [{ content: t('admin'), href: RoutePath.admin_panel }] : []),
        { content: t('profile'), href: RoutePath.profile + authData.id },
        { content: t('logout'), onClick: onLogout }
      ]}
      trigger={<Avatar size={30} src={authData.avatar} />}
    />
  );
});
