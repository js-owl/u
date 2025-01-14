import { classNames } from "1_shared/libs/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "1_shared/ui/Button/Button";
import { Input } from "1_shared/ui/Input/Input";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}
export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.LoginForm, {}[className])}>
      <Input
        autofocus
        type="text"
        className={cls.input}
        placeholder={t("enter name")}
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={t("enter password")}
      />
      <Button className={cls.loginBtn}>{t("enter")}</Button>
    </div>
  );
};
