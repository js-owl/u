import { StateSchema } from "7_app/providers/StoreProvider";

export const getArticleRecommendationsIsLoading = (state: StateSchema) =>
  state.articleDetailPage?.recommendations?.isLoading;
export const getArticleRecommendationsError = (state: StateSchema) =>
  state.articleDetailPage?.recommendations?.error;
