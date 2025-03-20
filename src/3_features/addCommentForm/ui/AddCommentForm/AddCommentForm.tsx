import { memo, Reducer, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { classNames } from "1_shared/libs/classNames/classNames";
import { useAppDispatch } from "1_shared/libs/hooks/useAppDispatch/useAppDispatch";
import {
  DynamicModuleLoader,
  ReducersList,
} from "1_shared/libs/c/DynamicModuleLoader/DynamicModuleLoader";

import { Input } from "1_shared/ui/Input/Input";
import { Button, ButtonTheme } from "1_shared/ui/Button/Button";

import cls from "./AddCommentForm.module.scss";
import {
  getAddCommentFromError,
  getAddCommentFromText,
} from "../../model/selectors/AddCommentFormSelectors";
import {
  addCommentFormActions,
  addCommentFormReducer,
} from "../../model/slices/addCommentFormSlice";

interface AddCommentFormProps {
  className?: string;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(({ className }: AddCommentFormProps) => {
  const { t } = useTranslation("article-details");
  const text = useSelector(getAddCommentFromText);
  const error = useSelector(getAddCommentFromError);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input
          className={cls.input}
          placeholder={t("comment")}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button theme={ButtonTheme.OUTLINE}>{t("send")}</Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
