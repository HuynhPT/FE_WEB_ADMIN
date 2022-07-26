import { mToken } from "../../token/TokenLogin";
import { axiosClient } from "./LinkUser";
export const getAllUser = async () => {
  const url = "account-user/get-allUsers";
  return await axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};
