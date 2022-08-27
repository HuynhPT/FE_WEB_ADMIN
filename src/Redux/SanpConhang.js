import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllConhang} from "../API/StatisticalApi";
export const getsanphamConhang = createAsyncThunk(
  "conhang/getsanphamConhang",
  async () => {
    const { data: getexport } = await getAllConhang();
    console.log(getexport);
    return getexport.totalItems;
  }
);
const SPConhang = createSlice({
  name: "auth",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getsanphamConhang.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
  },
});

export const { loginStart, loginSuccess, loginFailed } = SPConhang.actions;

export default SPConhang.reducer;
