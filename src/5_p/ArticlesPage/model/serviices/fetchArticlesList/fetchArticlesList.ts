import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "7_app/providers/StoreProvider";
import { Article } from "2_entities/Article";

console.log("|-fetchArticlesList");
export const fetchArticlesList = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>(
  "articlesPage/fetchArticlesList",
  async (articleId, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<Article[]>("/articles", {
        params: { _expand: "user" },
      });
      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue("error");
    }
  }
);
