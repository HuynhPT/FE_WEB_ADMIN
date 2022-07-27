import { mToken } from "../../token/TokenLogin";
import {
  URL_GET_ALL_BILL,
  URL_GET_NEW_DAY_BILL,
  URL_GET_OLD_DAY_BILL,
} from "./ALLAPI";
import { axiosClient } from "./Link";
export const getBill = async () => {
  const url = `${URL_GET_ALL_BILL}`;
  return await axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};
export const getBillNew = async () => {
  const url = `${URL_GET_NEW_DAY_BILL}`;

  return await axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};
export const getBillOld = async () => {
  const url = `${URL_GET_OLD_DAY_BILL}`;

  return await axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};
