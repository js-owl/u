import { useTranslation } from "react-i18next";
import { classNames, Mods } from "1_shared/libs/classNames/classNames";
import { Text, TextAlign, TextTheme } from "1_shared/ui/Text/Text";
import { Input } from "1_shared/ui/Input/Input";
import { Loader } from "1_shared/ui/Loader/Loader";
import { Avatar } from "1_shared/ui/Avatar/Avatar";
import { Profile } from "2_entities/Profile/model/types/profile";
import { Currency, CurrencySelect } from "2_entities/Currency";
import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstName?: (value: string) => void;
  onChangeLastName?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
}
export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
  } = props;
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

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} />{" "}
          </div>
        )}
        <Input
          value={data?.first}
          placeholder={t("name")}
          className={cls.input}
          onChange={onChangeFirstName}
          readonly={readonly}
        ></Input>
        <Input
          value={data?.lastname}
          placeholder={t("lastname")}
          className={cls.input}
          onChange={onChangeLastName}
          readonly={readonly}
        ></Input>
        <Input
          value={data?.age}
          placeholder={t("age")}
          className={cls.input}
          onChange={onChangeAge}
          readonly={readonly}
        ></Input>
        <Input
          value={data?.city}
          placeholder={t("city")}
          className={cls.input}
          onChange={onChangeCity}
          readonly={readonly}
        ></Input>
        <Input
          value={data?.username}
          placeholder={t("username")}
          className={cls.input}
          onChange={onChangeUsername}
          readonly={readonly}
        ></Input>
        <Input
          value={data?.avatar}
          placeholder={t("avatar")}
          className={cls.input}
          onChange={onChangeAvatar}
          readonly={readonly}
        ></Input>
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
