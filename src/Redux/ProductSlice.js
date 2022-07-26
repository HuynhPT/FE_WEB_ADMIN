import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import axios from "axios";
import { getAll, getHight, getLow, getNew, getOld } from "../API/ProductAPI";
import { mToken } from "../../token/TokenLogin";
export const getProduct = createAsyncThunk("product/getProduct", async () => {
  const { data: products } = await getAll();
  return products.result;
});
export const getNewProduct = createAsyncThunk(
  "product/getNewProduct",
  async () => {
    const { data: products } = await getNew();
    console.log(products);
    return products.result;
  }
);
export const getOldProduct = createAsyncThunk(
  "product/getOldProduct",
  async () => {
    const { data: products } = await getOld();
    console.log(products);
    return products.result;
  }
);
export const getHightProduct = createAsyncThunk(
  "product/getHightProduct",
  async () => {
    const { data: products } = await getHight();
    console.log(products);
    return products.result;
  }
);
export const getLowProduct = createAsyncThunk(
  "product/getLowProduct",
  async () => {
    const { data: products } = await getLow();
    console.log(products);
    return products.result;
  }
);

export const filterProduct = createAsyncThunk(
  "product/filterProduct",
  async (data) => {
    console.log(data);
    let products = [];

    await axios({
      url: "http://18.141.199.110:3000/api/product/get-product/ByID",
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: product } = await getAll();
        console.log(product);
        products = res.data.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return products;
  }
);
export const delAllProduct = createAsyncThunk(
  "product/delAllProduct",
  async (data) => {
    console.log(data);
    let products = [];

    await axios({
      url: "http://18.141.199.110:3000/api/product/delete-product",
      method: "DELETE",
      headers: {
        token: mToken,
        "content-type": "multipart/form-data",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: product } = await getAll();
        console.log(product);
        products = product.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return products;
  }
);
export const delProduct = createAsyncThunk(
  "product/delProduct",
  async (data) => {
    console.log(data);
    let products = [];

    await axios({
      url: "http://18.141.199.110:3000/api/product/delete-product-ById",
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: product } = await getAll();
        console.log(product);
        products = product.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return products;
  }
);
export const searchProduct = createAsyncThunk(
  "product/searchProduct",
  async (data) => {
    console.log(data);
    let products = [];

    await axios({
      url: "http://18.141.199.110:3000/api/product/search-product-title",
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: product } = await getAll();
        console.log(product);
        products = res.data.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return products;
  }
);
export const StatusProduct = createAsyncThunk(
  "product/StatusProduct",
  async (data) => {
    console.log(data);
    let products = [];

    await axios({
      url: "http://18.141.199.110:3000/api/product/change-product/ByID",
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: product } = await getAll();
        products = product.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return products;
  }
);
const productSlice = createSlice({
  name: "auth",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(filterProduct.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(delAllProduct.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });

    builder.addCase(getProduct.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(getNewProduct.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(getOldProduct.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(getHightProduct.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(getLowProduct.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });

    builder.addCase(delProduct.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(searchProduct.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(StatusProduct.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
  },
});

export const { loginStart, loginSuccess, loginFailed } = productSlice.actions;

export default productSlice.reducer;
