import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    selectedProduct: null
  },
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    }
  }
});

export const { setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;