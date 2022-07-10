import { axiosClient } from "./Link";
export const getAll = () => {
  const url = "/category-product/get-category-product";
  return axiosClient.get(url);
};

export const add = async (data) => {
  const url = "/category-product/create-category-product";
  return await axiosClient.post(url, data);
};

export const remove = async (id, data) => {
  const url = `/category-product/delete-category-product/findById/${_id}`;
  return await axiosClient.delete(url);
};
