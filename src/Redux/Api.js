import axios from "axios";
import { loginStart, loginSuccess, loginFailed } from "./AuthSlice";

export const loginUser = async (user, dispacth, navigation) => {
  dispacth(loginStart());
  try {
    const res = await axios.post(
      "http://18.141.199.110:3000/account-ad/login-admin",
      user
    );
    dispacth(loginSuccess(res.data));
    navigation("/shop/tong_quan");
  } catch (err) {
    dispacth(loginFailed());
  }
};
