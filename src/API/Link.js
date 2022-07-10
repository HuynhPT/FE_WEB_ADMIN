import axios from "axios";
export const axiosClient = axios.create({
  baseURL: "http://18.141.199.110:3000/api",
  headers: {
    Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzU5NmUwMzgyYzMyY2M1MTIzNTkzMiIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTcxNjM0MDYsImV4cCI6MTY1OTc1NTQwNn0.ZmLJVVf6UQvLqioCBrRTaBPYJkRlI5kFPkEWv2rZ4BI`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
