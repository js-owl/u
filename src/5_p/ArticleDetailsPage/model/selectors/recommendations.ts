import { StateSchema } from '7_app/providers/StoreProvider';

export const getArticleRecommendationsIsLoading = (state: StateSchema) =>
  // eslint-disable-next-line
  state.articleDetailPage?.recommendations?.isLoading;
export const getArticleRecommendationsError = (state: StateSchema) =>
  // eslint-disable-next-line
  state.articleDetailPage?.recommendations?.error;
