import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "1_shared/libs/classNames/classNames";
import { Button, ButtonTheme } from "1_shared/ui/Button/Button";
import { Modal } from "1_shared/ui/Modal/Modal";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev: boolean) => !prev);
  }, []);
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t("enter")}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ex ut
        deleniti perspiciatis iure cumque quam quis suscipit similique fuga.
      </Modal>
    </div>
  );
};
export default Navbar;
