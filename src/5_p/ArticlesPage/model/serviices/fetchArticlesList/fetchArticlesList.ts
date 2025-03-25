import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "7_app/providers/StoreProvider";
import { Article } from "2_entities/Article";
import { getArticlesPageLimit } from "../../selectors/articlesPageSelectors";

interface FetchArticlesListProps {
  page?: number;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>("articlesPage/fetchArticlesList", async (props, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  const { page = 1 } = props;
  const limit = getArticlesPageLimit(getState());
  try {
    const response = await extra.api.get<Article[]>("/articles", {
      params: { _expand: "user", _limit: limit, _page: page },
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
