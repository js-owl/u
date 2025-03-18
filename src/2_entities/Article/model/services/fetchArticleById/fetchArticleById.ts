import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "7_app/providers/StoreProvider";
import { Article } from "../../types/article";

console.log("|-fetchArticleById");
export const fetchArticleById = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string>
>(
  "articlesDetails/fetchArticleById",
  async (articleId, { extra, rejectWithValue }) => {
    console.log("fetchArticleById", { articleId }, { extra });
    try {
      const response = await extra.api.get<Article>(`/articles/${articleId}`);
      if (!response.data) {
        throw new Error();
      }
      console.log("fetchArticleById", response.data);
      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue("error");
    }
  }
);
