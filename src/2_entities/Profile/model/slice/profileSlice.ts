import { createSlice } from "@reduxjs/toolkit";
import { ProfileShema } from "../types/profile";

const initialState: ProfileShema = {
  data: undefined,
  isLoading: false,
  error: undefined,
  readonly: true,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
