import { useTranslation } from "react-i18next";
import { classNames } from "1_shared/libs/classNames/classNames";
import { Button, ButtonTheme } from "1_shared/ui/Button/Button";
import { Text } from "1_shared/ui/Text/Text";
import cls from "./ProfilePageHeader.module.scss";

interface ProfilePageHeaderProps {
  className?: string;
}
export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation("profile");
  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t("profile")} />
      <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
        {t("edit")}
      </Button>
    </div>
  );
};
