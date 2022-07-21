import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import axios from "axios";
import { getAll } from "../API/ImageAPI";

export const getBanner = createAsyncThunk(
  "imgFirstImages/getBanner",
  async () => {
    const { data: banner } = await getAll();
    console.log(banner);
    return banner.result;
  }
);
export const addBanner = createAsyncThunk(
  "imgFirstImages/addBanner",
  async (data) => {
    console.log(data);
    let bannners = [];

    await axios({
      url: "http://18.141.199.110:3000/img-first-images/creact-img",
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: banner } = await getColor();
        bannners = banner.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return bannners;
  }
);
export const delBanner = createAsyncThunk(
  "imgFirstImages/delBanner",
  async (data) => {
    console.log(data);
    let banners= [];
    const mToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjMzYzU5MDA4ODE0NDQ2YjUwYzljYSIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTU5MTM1NjUsImV4cCI6MTY1ODUwNTU2NX0.wCKaicbjW6rjyelXZk7hv3yil8kkoSQkHM1DKGiBL4A";

    await axios({
      url: `http://18.141.199.110:3000/img-first-images/delete-img/${id}`,
      method: "POST",
      headers: {
        token: `Bearer ${mToken} `,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: banner } = await getAll();
        banners = banner.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return banners;
  }
);
export const delallBanner = createAsyncThunk(
  "imgFirstImages/delallBanner",
  async (data) => {
    console.log(data);
    let banners = [];
    const mToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjMzYzU5MDA4ODE0NDQ2YjUwYzljYSIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTU5MTM1NjUsImV4cCI6MTY1ODUwNTU2NX0.wCKaicbjW6rjyelXZk7hv3yil8kkoSQkHM1DKGiBL4A";

    await axios({
      url: "http://18.141.199.110:3000//img-first-images/delete-img-all",
      method: "DELETE",
      headers: {
        token: `Bearer ${mToken} `,
        "Content-Type": "application/json",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: banner } = await getAll();
        banners = banner.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return banners;
  }
);
export const upBanner = createAsyncThunk(
  "imgFirstImages/upBanner",
  async (data) => {
    console.log(data);
    let banners = [];
    const mToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzU5NmUwMzgyYzMyY2M1MTIzNTkzMiIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTc1OTM5NzEsImV4cCI6MTY2MDE4NTk3MX0.GcgUDezf7NeUUseSlZ3ma8PWFbLnidQaTqpXy-85mFk";

    await axios({
      url: `http://18.141.199.110:3000/img-first-images/update-img`,
      method: "POST",
      headers: {
        token: `Bearer ${mToken} `,
        "Content-Type": "multipart/form-data",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: banner } = await getAll();
        banners = banner.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return banners;
  }
);
export const searchBanner = createAsyncThunk(
  "imgFirstImages/searchBanner",
  async (data) => {
    console.log(data);
    let banners = [];
    const mToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzU5NmUwMzgyYzMyY2M1MTIzNTkzMiIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTc1OTM5NzEsImV4cCI6MTY2MDE4NTk3MX0.GcgUDezf7NeUUseSlZ3ma8PWFbLnidQaTqpXy-85mFk";

    await axios({
      url: `http://18.141.199.110:3000/img-first-images/get-img/title/data`,
      method: "POST",
      headers: {
        token: `Bearer ${mToken} `,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: banner } = await getAll();
        banners = res.data.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return banners;
  }
);
const bannerSlice = createSlice({
  name: "auth",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBanner.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(addBanner.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(delallBanner.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(delBanner.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(searchBanner.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(upBanner.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
  },
});

export const { loginStart, loginSuccess, loginFailed } =
bannerSlice.actions;

export default bannerSlice.reducer;
