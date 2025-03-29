import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from "1_shared/const/localStorage";
import { Article, ArticleView } from "2_entities/Article";
import { ArticleSortField } from "2_entities/Article/model/types/article";
import { StateSchema } from "7_app/providers/StoreProvider";
import { fetchArticlesList } from "../serviices/fetchArticlesList/fetchArticlesList";
import { ArticlesPageSchema } from "../types/articlePageSchema";
import { SortOrder } from "1_shared/types";

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
);

const articlesPageSlice = createSlice({
  name: "articlePageSlice",
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    _inited: false,
    isLoading: false,
    ids: [],
    entities: {},
    error: undefined,
    view: ArticleView.SMALL,
    page: 1,
    hasMore: true,
    limit: 9,
    sort: ArticleSortField.CREATED,
    search: "",
    order: "asc",
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(
        ARTICLE_VIEW_LOCALSTORAGE_KEY
      ) as ArticleView;
      state.view = view;
      state.limit = view === ArticleView.BIG ? 4 : 9;
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchArticlesList.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.isLoading = false;
          articlesAdapter.addMany(state, action.payload);
          state.hasMore = action.payload.length > 0;
        }
      )
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articlesPageReducer, actions: articlesPageActions } =
  articlesPageSlice;
