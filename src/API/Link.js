import axios from "axios";
export const axiosClient = axios.create({
  baseURL: "http://192.168.254.1:3000",
  headers: {
    "Content-Type": "application/json",
  },
});
