import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "7_app/providers/StoreProvider";
import { getArticlesPageInited } from "../../selectors/articlesPageSelectors";
import { articlesPageActions } from "../../slices/articlePageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>("articlesPage/initArticlesPage", async (_, thunkApi) => {
  const { getState, dispatch } = thunkApi;
  const inited = getArticlesPageInited(getState());

  if (!inited) {
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({}));
  }
});
