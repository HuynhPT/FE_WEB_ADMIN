import { mToken } from "../../token/TokenLogin";
import { axiosClient } from "./LinkPD";

export const getPostAll = async () => {
  const url = "/user-spaper/get-post";

  return await axiosClient.get(url, {
    headers: {
      token: mToken,
    },
  });
};
