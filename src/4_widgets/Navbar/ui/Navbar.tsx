/* eslint-disable i18next/no-literal-string */
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "1_shared/libs/classNames/classNames";
import { Button, ButtonTheme } from "1_shared/ui/Button/Button";
import { LoginModal } from "3_features/AuthByUsername";
import cls from "./Navbar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "2_entities/User";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);
  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);
  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.links}
          onClick={onLogout}
        >
          {t("logout")}
        </Button>
      </div>
    );
  }
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t("enter")}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
};
