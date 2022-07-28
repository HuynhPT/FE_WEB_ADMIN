import { mToken } from "../../token/TokenLogin";
import {
  URL_IMPORT_MONEY_STATISTICAL,
  URL_MONEY_STATISTICAL,
  URL_SALES_REVENUS_MONEY_STATISTICAL,
  URL_STOCKING_PRODUCT,
  URL_SUM_IMPORT_PRODUCT_STATISTICAL,
  URL_SUM_PRODUCT_STATISTICAL,
  URL_UNSTOCKING_PRODUCT,
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

export const getAllCon = () => {
  const url = `${URL_STOCKING_PRODUCT}`;
  return axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};
export const getAllHet = () => {
  const url = `${URL_UNSTOCKING_PRODUCT}`;
  return axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};
export const getAllnewImport = () => {
  const url = `${URL_SUM_IMPORT_PRODUCT_STATISTICAL}`;
  return axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};
export const getAllloinhuan = () => {
  const url = `${URL_MONEY_STATISTICAL}`;
  return axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};
