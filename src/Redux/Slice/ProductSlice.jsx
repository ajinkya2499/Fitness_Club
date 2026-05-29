import { createSlice } from '@reduxjs/toolkit';
import productsData from '../../data/productsData';


const initialState = {
  products: productsData
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
