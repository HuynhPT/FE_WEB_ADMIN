import { configureStore } from "@reduxjs/toolkit";
import Redux from "./AuthSlice";
import productSlice from "./ProductSlice";
import typeProductSlice from "./TypeProductSlice";
import ojectCategoriSlice from "./OjectCategoriSlice";
export const store = configureStore({
  reducer: {
    auth: Redux,
    product: productSlice,
    typeproduct: typeProductSlice,
    categoris: ojectCategoriSlice,
  },
});