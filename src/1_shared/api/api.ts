import { USER_LOCALSTORAGE_KEY } from "1_shared/const/localStorage";
import axios from "axios";

export const $api = axios.create({
  baseURL: "http://localhost:8000",
  headers: { authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) },
});
