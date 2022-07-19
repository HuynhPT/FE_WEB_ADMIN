import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import axios from "axios";
import { delAll, getAll } from "../API/TypeProductAPI";
export const getTypeProduct = createAsyncThunk(
  "typeProduct/getTypeProduct",
  async () => {
    const { data: product } = await getAll();
    console.log("Ở đây", product);
    return product.data;
  }
);
export const dellAllTypeProduct = createAsyncThunk(
  "typeProduct/dellAllTypeProduct",
  async (id) => {
    let products = [];
    const mToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjMzYzU5MDA4ODE0NDQ2YjUwYzljYSIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTU5MTM1NjUsImV4cCI6MTY1ODUwNTU2NX0.wCKaicbjW6rjyelXZk7hv3yil8kkoSQkHM1DKGiBL4A";

    await axios({
      url: "http://18.141.199.110:3000/api/type-product/destroy-type-product",
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
export const addTypeProduct = createAsyncThunk(
  "typeProduct/addTypeProduct",
  async (data) => {
    let products = [];
    const mToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzU5NmUwMzgyYzMyY2M1MTIzNTkzMiIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTcxNjM0MDYsImV4cCI6MTY1OTc1NTQwNn0.ZmLJVVf6UQvLqioCBrRTaBPYJkRlI5kFPkEWv2rZ4BI";

    await axios({
      url: "http://18.141.199.110:3000/api/type-product/create-type-product",
      method: "POST",
      headers: {
        token: `Bearer ${mToken} `,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
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
export const delTypeProduct = createAsyncThunk(
  "typeProduct/delTypeProduct",
  async (id) => {
    let products = [];
    const mToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjMzYzU5MDA4ODE0NDQ2YjUwYzljYSIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTU5MTM1NjUsImV4cCI6MTY1ODUwNTU2NX0.wCKaicbjW6rjyelXZk7hv3yil8kkoSQkHM1DKGiBL4A";

    await axios({
      url: `http://18.141.199.110:3000/api/type-product/delete-type-product/findById`,
      method: "POST",
      headers: {
        token: `Bearer ${mToken} `,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(id),
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
export const upTypeProduct = createAsyncThunk(
  "typeProduct/upTypeProduct",
  async (data) => {
    let products = [];
    const mToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzU5NmUwMzgyYzMyY2M1MTIzNTkzMiIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTcxNjM0MDYsImV4cCI6MTY1OTc1NTQwNn0.ZmLJVVf6UQvLqioCBrRTaBPYJkRlI5kFPkEWv2rZ4BI";

    await axios({
      url: `http://18.141.199.110:3000/api/type-product/edit-type-product/findById`,
      method: "POST",
      headers: {
        token: `Bearer ${mToken} `,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
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

const typeProductSlice = createSlice({
  name: "auth",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addTypeProduct.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(getTypeProduct.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(dellAllTypeProduct.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(delTypeProduct.fulfilled, (state, action) => {
      console.log(action.payload, "fdfff");
      state.value = action.payload;
    });
    builder.addCase(upTypeProduct.fulfilled, (state, action) => {
      console.log(action.payload, "fdfff");
      state.value = action.payload;
    });
  },
});

export const { loginStart, loginSuccess, loginFailed } =
  typeProductSlice.actions;

export default typeProductSlice.reducer;
