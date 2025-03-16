import { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { classNames } from "1_shared/libs/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "1_shared/libs/c/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "1_shared/libs/hooks/useAppDispatch/useAppDispatch";
import { fetchArticleById } from "2_entities/Article/model/services/fetchArticleById/fetchArticleById";
import cls from "./ArticleDetails.module.scss";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetails";
import { Text, TextAlign } from "1_shared/ui/Text/Text";

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const dispatch = useAppDispatch();
  const article = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <Text title="error" align={TextAlign.CENTER} />;
  } else {
    content = <div>ArticleDetails</div>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
