import { axiosClient } from "./Link";
export const getAll = () => {
  const url = "http://18.141.199.110:3000/img-first-images/get-img";
  return axiosClient.get(url);
};

