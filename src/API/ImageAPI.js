import { axiosClient } from "./Link";
export const getAll = () => {
  const url = "/img-first-images/get-img";
  return axiosClient.get(url);
};

export const add = (data) => {
  console.log(data);
  const url = "/img-first-images/creact-img";
  return axiosClient.post(url, data);
};
