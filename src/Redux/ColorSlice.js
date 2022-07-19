import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import axios from "axios";
import { getColor } from "../API/ColorSize";
import { mToken } from "../../token/TokenLogin";
export const getColorsize = createAsyncThunk(
  "colorsize/getColorsize",
  async () => {
    const { data: colors } = await getColor();
    console.log(colors);
    return colors.result;
  }
);
export const addColorsize = createAsyncThunk(
  "colorsize/addColorsize",
  async (data) => {
    console.log(data);
    let col = [];

    await axios({
      url: "http://18.141.199.110:3000/api/size-color/create-color",
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: colors } = await getColor();
        col = colors.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return col;
  }
);
export const delAllColorsize = createAsyncThunk(
  "colorsize/delAllColorsize",
  async (data) => {
    console.log(data);
    let col = [];

    await axios({
      url: "http://18.141.199.110:3000/api/size-color/destroy-color",
      method: "DELETE",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: colors } = await getColor();
        col = colors.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return col;
  }
);
export const removeColorsize = createAsyncThunk(
  "colorsize/removeColorsize",
  async (data) => {
    console.log(data);
    let col = [];

    await axios({
      url: "http://18.141.199.110:3000/api/size-color/destroy-colorById",
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: colors } = await getColor();
        col = colors.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return col;
  }
);
export const searchColorsize = createAsyncThunk(
  "colorsize/searchColorsize",
  async (data) => {
    console.log(data);
    let col = [];

    await axios({
      url: "http://18.141.199.110:3000/api/size-color/search-color",
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: colors } = await getColor();
        col = res.data.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return col;
  }
);
export const upColorsize = createAsyncThunk(
  "colorsize/upColorsize",
  async (data) => {
    console.log(data);
    let col = [];

    await axios({
      url: "http://18.141.199.110:3000/api/size-color/edit-colorById",
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: colors } = await getColor();
        col = colors.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return col;
  }
);
const colorSlice = createSlice({
  name: "auth",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getColorsize.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(addColorsize.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(delAllColorsize.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(removeColorsize.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(searchColorsize.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(upColorsize.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
  },
});

export const { loginStart, loginSuccess, loginFailed } = colorSlice.actions;

export default colorSlice.reducer;
