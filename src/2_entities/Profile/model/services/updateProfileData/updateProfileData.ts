import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '7_app/providers/StoreProvider';
import { Profile, ValidateProfileError } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  const formData = getProfileForm(getState());
  const errors = validateProfileData(formData);

  if (errors.length) {
    return rejectWithValue(errors);
  }

  try {
    const response = await extra.api.put<Profile>(
      `/profile/${formData?.id}`,
      formData
    );
    if (!response.data) {
      throw new Error();
    }
    console.log('updateProfileData', { formData }, { response });
    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
  }
});
