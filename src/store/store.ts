import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/product_details_slice";
import userReducer from "./slices/user_slice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    user: userReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch