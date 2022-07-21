import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import axios from "axios";
import { getAll } from "../API/ImageAPI";

export const delImg = createAsyncThunk("imgFirstImages/delImg", async (id) => {

  let flasts = [];

  const mToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzU5NmUwMzgyYzMyY2M1MTIzNTkzMiIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTc2MDg4OTksImV4cCI6MTY2MDIwMDg5OX0.ttQqEcG4mRYt4MrRPr5lZaOkbTFzdJqoVp9039aR3LU";

  await axios({
    url: `http://18.141.199.110:3000/img-first-images/delete-img/${id}`,
    method: "DELETE",
    headers: {
      token: `Bearer ${mToken} `,
      "Content-Type": "application/json",
    },
  }).then(
    async (res) => {
      const { data: flast } = await getAll();

      flasts = flast.data;

    },
    (err) => {
      console.log(err.response, "?");
    }
  );

  return flasts;

});
const Bannner = createSlice({
  name: "flast",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(delImg.fulfilled, (state, action) => {
      console.log(action.payload, "aaaa");
      state.value = action.payload;
    });
  },
});
export const { loginStart, loginSuccess, loginFailed } = Bannner.actions;

export default Bannner.reducer;
