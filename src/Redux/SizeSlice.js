import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import axios from "axios";
import { getSize } from "../API/ColorSize";
import { mToken } from "../../token/TokenLogin";
export const getSizecolor = createAsyncThunk(
  "sizecolor/getSizecolor",
  async () => {
    const { data: sizes } = await getSize();
    console.log(sizes);
    return sizes.result;
  }
);
export const addSizecolor = createAsyncThunk(
  "sizecolor/addSizecolor",
  async (data) => {
    console.log(data);
    let col = [];

    await axios({
      url: "http://18.141.199.110:3000/api/size-color/create-size",
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: sizes } = await getSize();
        col = sizes.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return col;
  }
);
export const delAllSizecolor = createAsyncThunk(
  "sizecolor/delAllSizecolor",
  async (data) => {
    console.log(data);
    let col = [];

    await axios({
      url: "http://18.141.199.110:3000/api/size-color/destroy-size",
      method: "DELETE",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: sizes } = await getSize();
        col = sizes.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return col;
  }
);
export const removeSizecolor = createAsyncThunk(
  "sizecolor/removeSizecolor",
  async (data) => {
    console.log(data);
    let col = [];

    await axios({
      url: "http://18.141.199.110:3000/api/size-color/destroy-sizeById",
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: sizes } = await getSize();
        col = sizes.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return col;
  }
);
// export const searchColorsize = createAsyncThunk(
//   "sizecolor/searchColorsize",
//   async (data) => {
//     console.log(data);
//     let col = [];

//     await axios({
//       url: "http://18.141.199.110:3000/api/size-color/search-color",
//       method: "POST",
//       headers: {
//         token: mToken,
//         "content-type": "application/x-www-form-urlencoded",
//       },
//       data: qs.stringify(data),
//     }).then(
//       async (res) => {
//         const { data: colors } = await getSize();
//         col = res.data.result;
//       },
//       (err) => {
//         console.log(err.response, "?");
//       }
//     );
//     return col;
//   }
// );
export const upSizecolor = createAsyncThunk(
  "sizecolor/upSizecolor",
  async (data) => {
    console.log(data);
    let col = [];

    await axios({
      url: "http://18.141.199.110:3000/api/size-color/edit-sizeById",
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: sizes } = await getSize();
        col = sizes.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return col;
  }
);
const sizeslice = createSlice({
  name: "auth",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSizecolor.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(addSizecolor.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(delAllSizecolor.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(removeSizecolor.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    // builder.addCase(searchColorsize.fulfilled, (state, action) => {
    //   console.log(action.payload);
    //   state.value = action.payload;
    //   // action is inferred correctly here if using TS
    // });
    builder.addCase(upSizecolor.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
  },
});

export const { loginStart, loginSuccess, loginFailed } = sizeslice.actions;

export default sizeslice.reducer;
