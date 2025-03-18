import { memo } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { classNames } from "1_shared/libs/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "1_shared/libs/c/DynamicModuleLoader/DynamicModuleLoader";
import { useInitialEffect } from "1_shared/libs/hooks/useInitialEffect/useInitialEffect";
import { Text } from "1_shared/ui/Text/Text";

import { ArticleDetails } from "2_entities/Article";
import { CommentList } from "2_entities/Comment";
import { getArticleCommentsIsLoading } from "5_p/ArticleDetailsPage/model/selectors/comments";
import { fetchCommentsByArticleId } from "5_p/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";

import cls from "./ArticleDetailsPage.module.scss";
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from "../../model/slices/ArticleDetailsCommentsSlice";
// ----- imports -----

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation("article-details");
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  console.log("ArticleDetailsPage", { comments }, { id });
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t("article not found")}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetails id={id} />
        <Text className={cls.commentTitle} title={t("comments")} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </div>
    </DynamicModuleLoader>
  );
};
export default memo(ArticleDetailsPage);
