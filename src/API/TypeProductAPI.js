import { axiosClient } from "./Link";
export const getAll = () => {
  const url = "/type-product/get-type-product";
  return axiosClient.get(url);
};

export const add = async (data) => {
  const url = "/type-product/create-type-product";
  return await axiosClient.post(url, data);
};
