import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '7_app/providers/StoreProvider';
import { Profile } from '../../types/profile';

console.log('|-fetchProfileData');
export const fetchProfileData = createAsyncThunk<
  Profile,
  string,
  ThunkConfig<string>
>('profile/fetchProfileData', async (profileId, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.get<Profile>(`/profile/${profileId}`);
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('error');
  }
});
