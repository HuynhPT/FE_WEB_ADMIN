import { axiosClient } from "./LinkPD";

export const getAll = () => {
  const url = "/product/get-product";
  return axiosClient.get(url);
};
export const addAll = (data) => {
  const url = "/product/create-product";
  return axiosClient.post(url, data);
};
