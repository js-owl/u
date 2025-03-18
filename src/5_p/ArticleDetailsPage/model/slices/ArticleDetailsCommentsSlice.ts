import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Comment } from "2_entities/Comment";
import { StateSchema } from "7_app/providers/StoreProvider";
import { ArticleDetailsCommentsSchema } from "../types/ArticleDetailsCommentsSchema";

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
);

const articleDetailsCommentsSlice = createSlice({
  name: "articleDetailsCommentsSlice",
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: false,
    ids: ["1", "2"],
    entities: {
      "1": {
        id: "1",
        text: "c1",
        user: {
          id: "1",
          username: "alex",
          avatar:
            "https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg",
        },
      },
      "2": {
        id: "2",
        text: "c2",
        user: {
          id: "2",
          username: "bob",
          avatar:
            "https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg",
        },
      },
    },
    error: undefined,
  }),
  reducers: {},
});

export const { actions: articleDetailsCommentsActions } =
  articleDetailsCommentsSlice;
export const { reducer: articleDetailsCommentsReducer } =
  articleDetailsCommentsSlice;
