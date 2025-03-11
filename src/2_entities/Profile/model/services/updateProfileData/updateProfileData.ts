import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "7_app/providers/StoreProvider";
import { Profile } from "../../types/profile";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>("profile/updateProfileData", async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  const formData = getProfileForm(getState());

  try {
    const response = await extra.api.put<Profile>("/profile", formData);
    console.log("updateProfileData", { formData }, { response });
    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("error");
  }
});
