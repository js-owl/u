import { Button } from "1_shared/ui/Button/Button";
import cls from "./PageError.module.scss";
import { useTranslation } from "react-i18next";
import { classNames } from "1_shared/libs/classNames/classNames";

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();
  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t("error")}</p>
      <Button onClick={reloadPage}>{t("update_page")}</Button>
    </div>
  );
};
