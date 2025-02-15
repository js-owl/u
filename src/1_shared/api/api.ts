import { USER_LOCALSTORAGE_KEY } from "1_shared/const/localStorage";
import axios from "axios";

console.log("|-api", { __API__ });
export const $api = axios.create({
  baseURL: __API__,
  headers: { authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) },
});
