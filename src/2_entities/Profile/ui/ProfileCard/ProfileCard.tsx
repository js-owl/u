import { useTranslation } from "react-i18next";
import { classNames } from "1_shared/libs/classNames/classNames";
import { Text, TextAlign, TextTheme } from "1_shared/ui/Text/Text";
import { Button, ButtonTheme } from "1_shared/ui/Button/Button";
import { Input } from "1_shared/ui/Input/Input";
import { Loader } from "1_shared/ui/Loader/Loader";
import { Profile } from "2_entities/Profile/model/types/profile";
import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
}
export const ProfileCard = (props: ProfileCardProps) => {
  const { className, data, isLoading, error } = props;
  const { t } = useTranslation("profile");

  if (isLoading) {
    return (
      <div
        className={classNames(cls.ProfileCard, { [cls.loading]: true }, [
          className,
        ])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t("error occur")}
          text={t("try to reload")}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
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
