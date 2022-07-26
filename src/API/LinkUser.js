import axios from "axios";
import { mToken } from "../../token/TokenLogin";
export const axiosClient = axios.create({
  baseURL: "http://18.141.199.110:3000/",
  headers: {
    Authorization: mToken,
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
