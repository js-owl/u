import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "2_entities/Article";
import { ThunkConfig } from "7_app/providers/StoreProvider";

export const fetchArticleRecommendations = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>("articleDetailsPage/fetchArticleRecommendations", async (props, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get<Article[]>("/articles", {
      params: {
        _limit: 4,
      },
    });
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("error");
  }
});
