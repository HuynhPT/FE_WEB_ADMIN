import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import axios from "axios";
import { mToken } from "../../token/TokenLogin";
import { getBill, getBillNew, getBillOld } from "../API/BillApi";
import { message } from "antd";
export const getBillProduct = createAsyncThunk(
  "bills/getBillProduct",

  async () => {
    const { data: billoder } = await getBill();
    console.log(billoder);
    return billoder.bill;
  }
);
export const getBillOderNew = createAsyncThunk(
  "bills/getBillOderNew",

  async () => {
    const { data: billoder } = await getBillNew();
    console.log(billoder);
    return billoder.result;
  }
);
export const getBillOderOld = createAsyncThunk(
  "bills/getBillOderOld",

  async () => {
    const { data: billoder } = await getBillOld();
    console.log(billoder);
    return billoder.result;
  }
);
export const FilterIdus = createAsyncThunk("bills/FilterIdus", async (data) => {
  let billdata = [];

  await axios({
    url: "http://18.141.199.110:3000/api/user-bill/bill-product-byid-user",
    method: "POST",
    headers: {
      token: mToken,
      "content-type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify(data),
  }).then(
    async (res) => {
      const { data: billoder } = await getBill();
      console.log(billoder);
      billdata = res.data.bill;
    },
    (err) => {
      console.log(err.response, "?");
    }
  );
  return billdata;
});
export const delAllBill = createAsyncThunk("bills/delAllBill", async (data) => {
  let billdata = [];

  await axios({
    url: "http://18.141.199.110:3000/api/user-bill/bill-product-delete-all",
    method: "DELETE",
    headers: {
      token: mToken,
      "content-type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify(data),
  }).then(
    async (res) => {
      const { data: billoder } = await getBill();
      console.log(billoder);
      billdata = billoder.bill;
    },
    (err) => {
      console.log(err.response, "?");
    }
  );
  return billdata;
});
export const removeBillOder = createAsyncThunk(
  "bills/removeBillOder",
  async (data) => {
    console.log(data);
    let billdata = [];

    await axios({
      url: "http://18.141.199.110:3000/api/user-bill/delete-bill",
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: billoder } = await getBill();
        console.log(billoder);
        billdata = billoder.bill;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return billdata;
  }
);
// // export const searchColorsize = createAsyncThunk(
// //   "sizecolor/searchColorsize",
// //   async (data) => {
// //     console.log(data);
// //     let col = [];

// //     await axios({
// //       url: "http://18.141.199.110:3000/api/size-color/search-color",
// //       method: "POST",
// //       headers: {
// //         token: mToken,
// //         "content-type": "application/x-www-form-urlencoded",
// //       },
// //       data: qs.stringify(data),
// //     }).then(
// //       async (res) => {
// //         const { data: colors } = await getSize();
// //         col = res.data.result;
// //       },
// //       (err) => {
// //         console.log(err.response, "?");
// //       }
// //     );
// //     return col;
// //   }
// // );
// export const upSizecolor = createAsyncThunk(
//   "sizecolor/upSizecolor",
//   async (data) => {
//     console.log(data);
//     let col = [];

//     await axios({
//       url: "http://18.141.199.110:3000/api/size-color/edit-sizeById",
//       method: "POST",
//       headers: {
//         token: mToken,
//         "content-type": "application/x-www-form-urlencoded",
//       },
//       data: qs.stringify(data),
//     }).then(
//       async (res) => {
//         const { data: sizes } = await getSize();
//         col = sizes.result;
//       },
//       (err) => {
//         console.log(err.response, "?");
//       }
//     );
//     return col;
//   }
// );
const billslice = createSlice({
  name: "auth",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBillProduct.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(getBillOderNew.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(getBillOderOld.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(FilterIdus.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(delAllBill.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(removeBillOder.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    // // builder.addCase(searchColorsize.fulfilled, (state, action) => {
    // //   console.log(action.payload);
    // //   state.value = action.payload;
    // //   // action is inferred correctly here if using TS
    // // });
    // builder.addCase(upSizecolor.fulfilled, (state, action) => {
    //   console.log(action.payload);
    //   state.value = action.payload;
    //   // action is inferred correctly here if using TS
    // });
  },
});

export const { loginStart, loginSuccess, loginFailed } = billslice.actions;

export default billslice.reducer;
