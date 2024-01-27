import axios from "axios";
import { API_URL } from "../lib/constance";
export const api = axios.create({
  baseURL: API_URL,
});
