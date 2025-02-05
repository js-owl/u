import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "1_shared/const/localStorage";
import { User, userActions } from "2_entities/User";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { rejectValue: string }
>("login/loginByUsername", async (authData, thunkAPI) => {
  try {
    const response = await axios.post<User>(
      "http://localhost:8000/login",
      authData
    );
    if (!response.data) {
      throw new Error();
    }
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    thunkAPI.dispatch(userActions.setAuthData(response.data));
    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue("error");
  }
});
