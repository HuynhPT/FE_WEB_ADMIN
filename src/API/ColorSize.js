import { axiosClient } from "./LinkPD";

export const getSize = async () => {
  const url = "/size-color/get-size";
  return await axiosClient.get(url);
};
export const getColor = async () => {
  const url = "/size-color/get-color";
  return await axiosClient.get(url);
};
export const getTheloai = async () => {
  const url = "/category-product/get-category-product";
  return await axiosClient.get(url);
};
