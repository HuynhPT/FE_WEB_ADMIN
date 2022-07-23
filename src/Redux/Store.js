import { configureStore } from "@reduxjs/toolkit";
import Redux from "./AuthSlice";
import productSlice from "./ProductSlice";
import typeProductSlice from "./TypeProductSlice";
import ojectCategoriSlice from "./OjectCategoriSlice";
import colorSlice from "./ColorSlice";
import sizeSlice from "./SizeSlice";
import billSlice from "./BillSlice";
import postSlice from "./PostSlice";
import bannerSlice from './AllBanner'
export const store = configureStore({
  reducer: {
    auth: Redux,
    product: productSlice,
    typeproduct: typeProductSlice,
    categoris: ojectCategoriSlice,
    colorsize: colorSlice,
    sizecolor: sizeSlice,
    bills: billSlice,
    posts: postSlice,
    banners: bannerSlice
  },
});
