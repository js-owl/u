import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import NotificationIcon from '1_shared/assets/icons/notification-20-20.svg';
import { RoutePath } from '1_shared/config/routeConfig/routeConfig';
import { classNames } from '1_shared/libs/classNames/classNames';
import { Button, ButtonTheme } from '1_shared/ui/Button/Button';
import { Text, TextTheme } from '1_shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from '1_shared/ui/AppLink/AppLink';
import { Dropdown } from '1_shared/ui/Dropdown/Dropdown';
import { Avatar } from '1_shared/ui/Avatar/Avatar';
import { HStack } from '1_shared/ui/Stack';
import { Icon } from '1_shared/ui/Icon/Icon';

import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '2_entities/User';
import { LoginModal } from '3_features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);
  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text className={cls.appName} title={t('Alex')} theme={TextTheme.INVERTED} />
        <AppLink to={RoutePath.article_create} theme={AppLinkTheme.SECONDARY} className={cls.createBtn}>
          {t('create article')}
        </AppLink>
        <HStack gap="16" className={cls.actions}>
          <Button theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon} inverted />
          </Button>
          <Dropdown
            direction="bottom left"
            items={[
              ...(isAdminPanelAvailable ? [{ content: t('admin'), href: RoutePath.admin_panel }] : []),
              { content: t('profile'), href: RoutePath.profile + authData.id },
              { content: t('logout'), onClick: onLogout }
            ]}
            trigger={<Avatar size={30} src={authData.avatar} />}
          />{' '}
        </HStack>
      </header>
    );
  }
  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>
        {t('enter')}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </header>
  );
};
