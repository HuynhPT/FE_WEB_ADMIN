import axios from "axios";
import {
  loginStart,
  loginSuccess,
  loginFailed,
  logOutStart,
  logOutSuccess,
  logOutFailed,
} from "./AuthSlice";

export const loginUser = async (user, dispacth, navigation) => {
  dispacth(loginStart());
  try {
    return axios
      .post("http://18.141.199.110:3000/account-ad/login-admin", user)
      .then((reponse) => {
        if (reponse.data.token) {
          localStorage.setItem("Token", JSON.stringify(reponse.data.token));
        }
        dispacth(loginSuccess(reponse.data));
        navigation("/shop/tong_quan");

        console.log("NÓ Ở ĐÂY", reponse.data.token);

        return reponse.data;
      });
  } catch (err) {
    dispacth(loginFailed());
  }
};
export const logOut = async (dispacth, navigation) => {
  dispacth(logOutStart());
  try {
  } catch (error) {}
};
