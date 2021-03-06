import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Redux from "./AuthSlice";
import productSlice from "./ProductSlice";
import typeProductSlice from "./TypeProductSlice";
import ojectCategoriSlice from "./OjectCategoriSlice";
import colorSlice from "./ColorSlice";
import sizeSlice from "./SizeSlice";
import billslice from "./BillSlice";
import postSlice from "./PostSlice";

import bannerSlice from "./AllBanner";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "./UserSlice";
import StatisticalSlice from "./StatisticalSlice";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const rootReducer = combineReducers({
  auth: Redux,
  product: productSlice,
  typeproduct: typeProductSlice,
  categoris: ojectCategoriSlice,
  colorsize: colorSlice,
  sizecolor: sizeSlice,
  bills: billslice,
  posts: postSlice,
  banners: bannerSlice,
  users: userSlice,
  statiscal: StatisticalSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
