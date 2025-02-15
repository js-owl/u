import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "7_app/providers/StoreProvider";
import { Profile } from "../../types/profile";

console.log("|-fetchProfileData");
export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>("profile/fetchProfileData", async (_, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.get<Profile>("/profile");
    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("error");
  }
});
