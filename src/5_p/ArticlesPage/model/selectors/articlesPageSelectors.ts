import { ArticleView } from "2_entities/Article";
import { StateSchema } from "7_app/providers/StoreProvider";

export const getArticlesPageIsLoading = (state: StateSchema) =>
  state.articlesPage?.isLoading || false;
export const getArticlesPageView = (state: StateSchema) =>
  state.articlesPage?.view || ArticleView.SMALL;
export const getArticlesPageError = (state: StateSchema) =>
  state.articlesPage?.error;
