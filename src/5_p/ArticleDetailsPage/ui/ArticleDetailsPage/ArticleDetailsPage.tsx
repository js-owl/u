import { memo, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { RoutePath } from "1_shared/config/routeConfig/routeConfig";
import { classNames } from "1_shared/libs/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "1_shared/libs/c/DynamicModuleLoader/DynamicModuleLoader";
import { useInitialEffect } from "1_shared/libs/hooks/useInitialEffect/useInitialEffect";
import { Button } from "1_shared/ui/Button/Button";
import { Text, TextSize } from "1_shared/ui/Text/Text";

import { ArticleDetails, ArticleList } from "2_entities/Article";
import { CommentList } from "2_entities/Comment";
import AddCommentForm from "3_features/addCommentForm/ui/AddCommentForm/AddCommentForm";
import { Page } from "4_widgets/Page/Page";

import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { getArticleRecommendationsIsLoading } from "../../model/selectors/recommendations";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { fetchArticleRecommendations } from "../../model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from "../../model/slices/ArticleDetailsCommentsSlice";
import {
  articleDetailsPageRecomendationsReducer,
  getArticleRecomendations,
} from "../../model/slices/articleDetailsPageRecomendationsSlice";
import cls from "./ArticleDetailsPage.module.scss";
import { articleDetailsPageReducer } from "5_p/ArticleDetailsPage/model/slices";
// ----- imports -----

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation("article-details");
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticleRecomendations.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const recommendationsIsLoading = useSelector(
    getArticleRecommendationsIsLoading
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, []);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  if (!id) {
    return (
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t("article not found")}
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <Button onClick={onBackToList}>{t("back to list")}</Button>
        <ArticleDetails id={id} />
        <Text
          size={TextSize.L}
          className={cls.commentTitle}
          title={t("recommend")}
        />
        <ArticleList
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          className={cls.recommendations}
          target="_blank"
        />
        <Text
          size={TextSize.L}
          className={cls.commentTitle}
          title={t("comments")}
        />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </Page>
    </DynamicModuleLoader>
  );
};
export default memo(ArticleDetailsPage);
