import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import axios from "axios";
import { mToken } from "../../token/TokenLogin";
import { getPostAll } from "../API/PostApi";

export const getPosst = createAsyncThunk(
  "posts/getPosst",

  async () => {
    const { data: Postdata } = await getPostAll();
    console.log(Postdata);
    return Postdata.result;
  }
);
const postSlice = createSlice({
  name: "auth",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosst.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
  },
});

export const { loginStart, loginSuccess, loginFailed } = postSlice.actions;

export default postSlice.reducer;
