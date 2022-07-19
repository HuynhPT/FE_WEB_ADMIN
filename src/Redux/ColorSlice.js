import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import axios from "axios";
import { getColor } from "../API/ColorSize";
export const getColorsize = createAsyncThunk(
  "colorsize/getColorsize",
  async () => {
    const { data: colors } = await getColor();
    console.log(colors);
    return colors.result;
  }
);
// export const addProduct = createAsyncThunk(
//   "product/addProduct",
//   async (data) => {
//     console.log(data);
//     let products = [];
//     const mToken =
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzU5NmUwMzgyYzMyY2M1MTIzNTkzMiIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTcxNjM0MDYsImV4cCI6MTY1OTc1NTQwNn0.ZmLJVVf6UQvLqioCBrRTaBPYJkRlI5kFPkEWv2rZ4BI";

//     await axios({
//       url: "http://18.141.199.110:3000/api/product/create-product",
//       method: "POST",
//       headers: {
//         token: `Bearer ${mToken} `,
//         "content-type": "multipart/form-data",
//       },
//       data: qs.stringify(data),
//     }).then(
//       async (res) => {
//         const { data: product } = await getAll();
//         console.log(product);
//         products = product.data;
//       },
//       (err) => {
//         console.log(err.response, "?");
//       }
//     );
//     return products;
//   }
// );
const colorSlice = createSlice({
  name: "auth",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(addProduct.fulfilled, (state, action) => {
    //   console.log(action.payload);
    //   state.value = action.payload;
    //   // action is inferred correctly here if using TS
    // });
    builder.addCase(getColorsize.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
  },
});

export const { loginStart, loginSuccess, loginFailed } = colorSlice.actions;

export default colorSlice.reducer;
