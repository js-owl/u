import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Text } from "1_shared/ui/Text/Text";
import { classNames } from "1_shared/libs/classNames/classNames";
import { getProfileData } from "2_entities/Profile/model/selectors/getProfileData/getProfileData";
import { getProfileIsLoading } from "2_entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "2_entities/Profile/model/selectors/getProfileError/getProfileError";
import cls from "./ProfileCard.module.scss";
import { Button, ButtonTheme } from "1_shared/ui/Button/Button";
import { Input } from "1_shared/ui/Input/Input";

interface ProfileCardProps {
  className?: string;
}
export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation("profile");
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t("profile")} />
        <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
          {t("edit")}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.first}
          placeholder={t("your name")}
          className={cls.input}
        ></Input>
        <Input
          value={data?.lastname}
          placeholder={t("your lastname")}
          className={cls.input}
        ></Input>
      </div>
    </div>
  );
};
