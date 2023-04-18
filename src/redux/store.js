import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products/productReducer";
import authSlice from "./auth/authSlice";

const store = configureStore({
  reducer: { products: productSlice.reducer, auth: authSlice.reducer },
});

export default store;
