import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { classNames } from "1_shared/libs/classNames/classNames";
import { Button, ButtonTheme } from "1_shared/ui/Button/Button";
import { Text } from "1_shared/ui/Text/Text";
import {
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from "2_entities/Profile";
import cls from "./ProfilePageHeader.module.scss";

interface ProfilePageHeaderProps {
  className?: string;
}
export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation("profile");
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useDispatch();
  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);
  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);
  const onSave = useCallback(() => {
    console.log("ProfilePageHeader - onSave()");
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t("profile")} />
      {readonly ? (
        <Button
          className={cls.editBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={onEdit}
        >
          {t("edit")}
        </Button>
      ) : (
        <>
          {" "}
          <Button
            className={cls.editBtn}
            theme={ButtonTheme.OUTLINE_RED}
            onClick={onCancelEdit}
          >
            {t("cancel")}
          </Button>
          <Button
            className={cls.saveBtn}
            theme={ButtonTheme.OUTLINE}
            onClick={onSave}
          >
            {t("save")}
          </Button>
        </>
      )}
    </div>
  );
};
