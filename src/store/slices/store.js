import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product_details_slice";

export const store = configureStore({
  reducer: {
    products: productReducer
  }
});