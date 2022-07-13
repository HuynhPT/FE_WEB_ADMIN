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
export const remove = async (id, data) => {
  const url = `/img-first-images/delete-img/${id}`;
  return await axiosClient.delete(url);
};