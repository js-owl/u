import { memo, Reducer, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/1_shared/libs/classNames/classNames';
import { useAppDispatch } from '@/1_shared/libs/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from '@/1_shared/libs/c/DynamicModuleLoader/DynamicModuleLoader';
import { Input } from '@/1_shared/ui/Input/Input';
import { Button, ButtonTheme } from '@/1_shared/ui/Button/Button';
import { HStack } from '@/1_shared/ui/Stack';

import cls from './AddCommentForm.module.scss';
import { getAddCommentFromError, getAddCommentFromText } from '../../model/selectors/AddCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';
// ----- imports -----

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer
};

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation('article-details');
  const text = useSelector(getAddCommentFromText);
  const error = useSelector(getAddCommentFromError);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch]
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack justify="between" max className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input className={cls.input} placeholder={t('comment')} value={text} onChange={onCommentTextChange} />
        <Button onClick={onSendHandler} theme={ButtonTheme.OUTLINE}>
          {t('send')}
        </Button>
      </HStack>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
