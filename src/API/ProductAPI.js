import { axiosClient } from "./LinkPD";

export const getAll = () => {
  const url = "/product/get-product";
  return axiosClient.get(url);
};
export const getNew = () => {
  const url = "/product/get-product-date-high";
  return axiosClient.get(url);
};
export const getOld = () => {
  const url = "/product/get-product-date-low";
  return axiosClient.get(url);
};
export const getHight = () => {
  const url = "/product/get-product-price-high";
  return axiosClient.get(url);
};
export const getLow = () => {
  const url = "/product/get-product-price-low";
  return axiosClient.get(url);
};
export const addAll = (data) => {
  const url = "/product/create-product";
  return axiosClient.post(url, data);
};
