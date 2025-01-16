import { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "1_shared/libs/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "1_shared/ui/Button/Button";
import { Input } from "1_shared/ui/Input/Input";
import cls from "./LoginForm.module.scss";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";

interface LoginFormProps {
  className?: string;
}
export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );
  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );
  const onLoginClick = useCallback(() => {}, []);
  return (
    <div className={classNames(cls.LoginForm, {}[className])}>
      <Input
        autofocus
        type="text"
        className={cls.input}
        placeholder={t("enter name")}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={t("enter password")}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        onClick={onLoginClick}
      >
        {t("enter")}
      </Button>
    </div>
  );
});
