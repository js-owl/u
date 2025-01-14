/* eslint-disable i18next/no-literal-string */
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "1_shared/libs/classNames/classNames";
import { Button, ButtonTheme } from "1_shared/ui/Button/Button";
import { LoginModal } from "3_features/AuthByUsername";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

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
