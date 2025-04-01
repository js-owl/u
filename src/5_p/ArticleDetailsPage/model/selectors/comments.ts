import { StateSchema } from "7_app/providers/StoreProvider";

export const getArticleCommentsIsLoading = (state: StateSchema) =>
  state.articleDetailPage?.comments?.isLoading;
export const getArticleCommentsError = (state: StateSchema) =>
  state.articleDetailPage?.comments?.error;
