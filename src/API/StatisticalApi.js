import { mToken } from "../../token/TokenLogin";
import {
  URL_IMPORT_MONEY_STATISTICAL,
  URL_SALES_REVENUS_MONEY_STATISTICAL,
  URL_SUM_PRODUCT_STATISTICAL,
} from "./ALLAPI";
import { axiosClient } from "./Link";
export const getAllSELl = () => {
  const url = `${URL_SALES_REVENUS_MONEY_STATISTICAL}`;
  return axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};
export const getAllimport = () => {
  const url = `${URL_IMPORT_MONEY_STATISTICAL}`;
  return axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};
export const getAllsum = () => {
  const url = `${URL_SUM_PRODUCT_STATISTICAL}`;
  return axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};
