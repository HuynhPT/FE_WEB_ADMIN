import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import axios from "axios";
import { getAll } from "../API/ImageAPI";
import { mToken } from "../../token/TokenLogin";
export const getBanner = createAsyncThunk("banners/getBanner", async () => {
  const { data: banner } = await getAll();
  console.log(banner);
  return banner.data;
});

export const getBannertitle = createAsyncThunk(
  "banners/getBannertitle",
  async (data) => {
    let bannners = [];

    await axios({
      url: "http://18.141.199.110:3000/img-first-images/get-img/title/data",
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: banner } = await getAll();
        bannners = res.data.data;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return bannners;
  }
);

// export const addBanner = createAsyncThunk(
//   "imgFirstImages/addBanner",
//   async (data) => {
//     console.log(data);
//     let bannners = [];

//     await axios({
//       url: "http://18.141.199.110:3000/img-first-images/creact-img",
//       method: "POST",
//       headers: {
//         token: mToken,
//         "content-type": "application/x-www-form-urlencoded",
//       },
//       data: qs.stringify(data),
//     }).then(
//       async (res) => {
//         const { data: banner } = await getColor();
//         bannners = banner.result;
//       },
//       (err) => {
//         console.log(err.response, "?");
//       }
//     );
//     return bannners;
//   }
// );
export const delBanner = createAsyncThunk("banners/delBanner", async (id) => {
  console.log(data);
  let banners = [];

  await axios({
    url: `http://18.141.199.110:3000/img-first-images/delete-img/${id}`,
    method: "DELETE",
    headers: {
      token: mToken,
      "content-type": "application/x-www-form-urlencoded",
    },
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
});
export const delallBanner = createAsyncThunk(
  "banners/delallBanner",
  async (data) => {
    console.log(data);
    let banners = [];

    await axios({
      url: "http://18.141.199.110:3000/img-first-images/delete-img-all",
      method: "DELETE",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: banner } = await getAll();
        banners = banner.data;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return banners;
  }
);
export const upBanner = createAsyncThunk("banners/upBanner", async (data) => {
  console.log(data);
  let banners = [];
  await axios({
    url: `http://18.141.199.110:3000/img-first-images/update-img`,
    method: "PUT",
    headers: {
      token: mToken,
      "content-type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify(data),
  }).then(
    async (res) => {
      const { data: banner } = await getAll();
      banners = banner.data;
    },
    (err) => {
      console.log(err.response, "?");
    }
  );
  return banners;
});
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
    builder.addCase(getBannertitle.fulfilled, (state, action) => {
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
    // builder.addCase(searchBanner.fulfilled, (state, action) => {
    //   console.log(action.payload);
    //   state.value = action.payload;
    //   // action is inferred correctly here if using TS
    // });
    // builder.addCase(upBanner.fulfilled, (state, action) => {
    //   console.log(action.payload);
    //   state.value = action.payload;
    //   // action is inferred correctly here if using TS
    // });
  },
});

export const { loginStart, loginSuccess, loginFailed } = bannerSlice.actions;

export default bannerSlice.reducer;
