import axios from "axios";
import { mToken } from "../../token/TokenLogin";
export const axiosClient = axios.create({
  baseURL: "http://18.141.199.110:3000/api",
  headers: {
    Authorization: mToken,
    "Content-Type": "multipart/form-data",
  },
});
