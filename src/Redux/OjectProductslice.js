import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import axios from "axios";
import { getAll } from "../API/OpjectProductApi";
export const getOpject = createAsyncThunk(
  "opjectproduct/getOpject",
  async () => {
    const { data: product } = await getAll();
    return product.data;
  }
);
export const delopjectProduct = createAsyncThunk(
  "opjectproduct/delopjectProduct",
  async (id) => {
    let products = [];
    const mToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjMzYzU5MDA4ODE0NDQ2YjUwYzljYSIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTU5MTM1NjUsImV4cCI6MTY1ODUwNTU2NX0.wCKaicbjW6rjyelXZk7hv3yil8kkoSQkHM1DKGiBL4A";

    await axios({
      url: `http://18.141.199.110:3000/api/category-product/delete-category-product/findById/${id}`,
      method: "DELETE",
      headers: {
        token: `Bearer ${mToken} `,
        "Content-Type": "application/json",
      },
    }).then(
      async (res) => {
        const { data: product } = await getAll();
        products = product.data;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return products;
  }
);
const OjectProductslice = createSlice({
  name: "auth",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(delopjectProduct.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(getOpject.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
  },
});

export const { loginStart, loginSuccess, loginFailed } =
  OjectProductslice.actions;

export default OjectProductslice.reducer;
