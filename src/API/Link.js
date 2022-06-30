import axios from "axios";
export const axiosClient = axios.create({
  baseURL: "http://ec2-13-250-14-151.ap-southeast-1.compute.amazonaws.com:3000",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmFhOTk3ZjlhY2JmZDgyMmY2YTE5MCIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTY0NzU0NjcsImV4cCI6MTY1OTA2NzQ2N30.aAcVy5Bj1hredK6tTL0ijhe0v8JRwx9luqf4vIlC8UU`,
    "Content-Type": "application/form-data",
  },
});
