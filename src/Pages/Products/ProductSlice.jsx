import { createSlice } from '@reduxjs/toolkit';
import wheyImg from '../../assets/Images/wheyprotine.jpg';

const initialState = {
  products: [
    {
      id: 1,
      name: 'Whey Protein',
      description: 'Whey protein is a high-quality, fast-digesting protein...',
      image: wheyImg,
    },
    {
      id: 2,
      name: 'Isolate Protein',
      description: 'Whey isolate is ultra-filtered and rich in BCAAs...',
      image: wheyImg,
    },
  ],
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
