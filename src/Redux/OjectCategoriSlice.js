import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import axios from "axios";
import { getAll } from "../API/OpjectProductApi";
export const getOpjectCategori = createAsyncThunk(
  "opjectcategori/getOpjectCategori",
  async () => {
    const { data: categoris } = await getAll();
    return categoris.data;
  }
);
export const delopjectCategori = createAsyncThunk(
  "opjectcategori/delopjectCategori",
  async (data) => {
    let newCategoris = [];
    const mToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjMzYzU5MDA4ODE0NDQ2YjUwYzljYSIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTU5MTM1NjUsImV4cCI6MTY1ODUwNTU2NX0.wCKaicbjW6rjyelXZk7hv3yil8kkoSQkHM1DKGiBL4A";

    await axios({
      url: `http://18.141.199.110:3000/api/category-product/delete-category-product/findById`,
      method: "POST",
      headers: {
        token: `Bearer ${mToken} `,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: categoris } = await getAll();
        newCategoris = categoris.data;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return newCategoris;
  }
);
export const delallopjectCategori = createAsyncThunk(
  "opjectcategori/delallopjectCategori",
  async (data) => {
    let newCategoris = [];
    const mToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjMzYzU5MDA4ODE0NDQ2YjUwYzljYSIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTU5MTM1NjUsImV4cCI6MTY1ODUwNTU2NX0.wCKaicbjW6rjyelXZk7hv3yil8kkoSQkHM1DKGiBL4A";

    await axios({
      url: "http://18.141.199.110:3000/api/category-product/destroy-category-product",
      method: "DELETE",
      headers: {
        token: `Bearer ${mToken} `,
        "Content-Type": "application/json",
      },
    }).then(
      async (res) => {
        const { data: categoris } = await getAll();
        newCategoris = categoris.data;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return newCategoris;
  }
);
export const upopjectCategori = createAsyncThunk(
  "opjectcategori/upopjectCategori",
  async (data) => {
    let categoriss = [];
    const mToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzU5NmUwMzgyYzMyY2M1MTIzNTkzMiIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTc1OTM5NzEsImV4cCI6MTY2MDE4NTk3MX0.GcgUDezf7NeUUseSlZ3ma8PWFbLnidQaTqpXy-85mFk";

    await axios({
      url: `http://18.141.199.110:3000/api/category-product/edit-category-product/findById`,
      method: "POST",
      headers: {
        token: `Bearer ${mToken} `,
        "Content-Type": "multipart/form-data",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: categoris } = await getAll();
        categoriss = categoris.data;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return categoriss;
  }
);
export const searchopjectCategori = createAsyncThunk(
  "opjectcategori/searchopjectCategori",
  async (data) => {
    let categoriss = [];
    const mToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzU5NmUwMzgyYzMyY2M1MTIzNTkzMiIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTc1OTM5NzEsImV4cCI6MTY2MDE4NTk3MX0.GcgUDezf7NeUUseSlZ3ma8PWFbLnidQaTqpXy-85mFk";

    await axios({
      url: `http://18.141.199.110:3000/api/category-product/search-category-product`,
      method: "POST",
      headers: {
        token: `Bearer ${mToken} `,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: categoris } = await getAll();
        console.log(res)
        categoriss = categoris.data;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return categoriss;
  }
);
const OjectCategoriSlice = createSlice({
  name: "auth",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOpjectCategori.fulfilled, (state, action) => {
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(delallopjectCategori.fulfilled, (state, action) => {
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(delopjectCategori.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(upopjectCategori.fulfilled, (state, action) => {
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(searchopjectCategori.fulfilled, (state, action) => {
      state.value = action.payload;
      console.log( action.payload,'ảo')
      // action is inferred correctly here if using TS
    });
  },
});

export const { loginStart, loginSuccess, loginFailed } =
  OjectCategoriSlice.actions;

export default OjectCategoriSlice.reducer;
