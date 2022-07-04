import { configureStore } from "@reduxjs/toolkit";
import Redux from "./AuthSlice";
export default configureStore({
  reducer: {
    auth: Redux,
  },
});
