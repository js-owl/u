import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { RoutePath } from '1_shared/config/routeConfig/routeConfig';
import { classNames } from '1_shared/libs/classNames/classNames';
import { Button, ButtonTheme } from '1_shared/ui/Button/Button';
import { Text, TextTheme } from '1_shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from '1_shared/ui/AppLink/AppLink';
import { HStack } from '1_shared/ui/Stack';
import { Drawer } from '1_shared/ui/Drawer/Drawer';

import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '2_entities/User';
import { NotificationList } from '2_entities/Notification';
import { LoginModal } from '3_features/AuthByUsername';
import { NotificationButton } from '3_features/notificationButton';
import { AvatarDropdown } from '3_features/avatarDropdown';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);
  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text className={cls.appName} title={t('Alex')} theme={TextTheme.INVERTED} />
        <AppLink to={RoutePath.article_create} theme={AppLinkTheme.SECONDARY} className={cls.createBtn}>
          {t('create article')}
        </AppLink>
        <HStack gap="16" className={cls.actions}>
          <button type="button" onClick={onOpenDrawer}>
            {t('click')}
          </button>
          <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
            <NotificationList />
          </Drawer>
          <NotificationButton />
          <AvatarDropdown />
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
