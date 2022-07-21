import { mToken } from "../../token/TokenLogin";
import { axiosClient } from "./LinkPD";

export const getBill = async () => {
  const url = "/user-bill/get-bill-product";

  return await axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};
export const getBillNew = async () => {
  const url = "/user-bill/get-bill-product/high";

  return await axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};
export const getBillOld = async () => {
  const url = "/user-bill/get-bill-product/short";

  return await axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};
