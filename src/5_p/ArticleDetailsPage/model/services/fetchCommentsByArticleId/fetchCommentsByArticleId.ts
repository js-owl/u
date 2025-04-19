import { createAsyncThunk } from '@reduxjs/toolkit';
import { Comment } from '@/2_entities/Comment';
import { ThunkConfig } from '@/7_app/providers/StoreProvider';

console.log('|-fetchCommentsByArticleId');
export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkConfig<string>
>(
  'articlesDetails/fetchCommentsByArticleId',
  async (articleId, { extra, rejectWithValue }) => {
    console.log('fetchCommentsByArticleId 2');
    if (!articleId) {
      return rejectWithValue('error');
    }
    try {
      const response = await extra.api.get<Comment[]>('/comments', {
        params: {
          articleId,
          _expand: 'user'
        }
      });
      console.log('fetchCommentsByArticleId', response.data);
      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  }
);
