import { StateSchema } from "7_app/providers/StoreProvider";

export const getArticleCommentsIsLoading = (state: StateSchema) =>
  state.articleDetailsComments?.isLoading;
export const getArticleCommentsError = (state: StateSchema) =>
  state.articleDetailsComments?.error;
