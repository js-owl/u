import { memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useTranslation } from "react-i18next";
import { classNames } from "1_shared/libs/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "1_shared/libs/c/DynamicModuleLoader/DynamicModuleLoader";
import { Button, ButtonTheme } from "1_shared/ui/Button/Button";
import { Text, TextTheme } from "1_shared/ui/Text/Text";
import { Input } from "1_shared/ui/Input/Input";
import { getLoginUsername } from "3_features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "3_features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "3_features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "3_features/AuthByUsername/model/selectors/getLoginError/getLoginError";
import cls from "./LoginForm.module.scss";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

export interface LoginFormProps {
  className?: string;
}
const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

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
  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <div className={classNames(cls.LoginForm, {}[className])}>
        <Text title={t("auth form")} />
        {error && (
          <Text text={t("wrong username/password")} theme={TextTheme.ERROR} />
        )}
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
          disabled={isLoading}
        >
          {t("enter")}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
