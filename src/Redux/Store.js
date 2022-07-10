import { configureStore } from "@reduxjs/toolkit";
import Redux from "./AuthSlice";
import productSlice from "./ProductSlice";
import typeProductSlice from "./TypeProductSlice";
export const store = configureStore({
  reducer: {
    auth: Redux,
    product: productSlice,
    typeproduct: typeProductSlice,
  },
});
