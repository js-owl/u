import { createAsyncThunk } from "@reduxjs/toolkit";
import { getArticleDetailsData } from "2_entities/Article/model/selectors/articleDetails";
import { getUserAuthData } from "2_entities/User";
import { Comment } from "2_entities/Comment";
import { ThunkConfig } from "7_app/providers/StoreProvider";
import { getAddCommentFromText } from "../../selectors/AddCommentFormSelectors";
import { addCommentFormActions } from "../../slices/addCommentFormSlice";

export const sendComment = createAsyncThunk<Comment, void, ThunkConfig<string>>(
  "addCommentForm/sendComment",
  async (authData, thunkApi) => {
    const { dispatch, extra, rejectWithValue, getState } = thunkApi;
    const userData = getUserAuthData(getState());
    const text = getAddCommentFromText(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !text || !article) {
      return rejectWithValue("no data");
    }

    try {
      const response = await extra.api.post<Comment>("/comments", {
        articleId: article.id,
        userId: userData.id,
        text,
      });
      if (!response.data) {
        throw new Error();
      }
      dispatch(addCommentFormActions.setText(""));
      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue("error");
    }
  }
);
