// src/features/diet/dietSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  diets: [
    {
      id: 1,
      name: 'Weight Loss Plan',
      description: 'Low-carb, high-protein diet for reducing weight.',
    },
    {
      id: 2,
      name: 'Muscle Gain Plan',
      description: 'High-protein and calorie-rich diet for muscle gain.',
    },
     {
      id: 3,
      name: 'Kito Plan',
      description: 'High-protein and calorie-rich diet for muscle gain.',
    },
     {
      id: 4,
      name: '0 carb Plan',
      description: 'High-protein and calorie-rich diet for muscle gain.',
    },
     {
      id: 5,
      name: 'Weight Gain Plan',
      description: 'High-protein and calorie-rich diet for muscle gain.',
    },
  ],
  selectedDietId: null,
};

const dietSlice = createSlice({
  name: 'diet',
  initialState,
  reducers: {
    // addDiet(state, action) {
    //   state.diets.push(action.payload);
    // },
    // selectDiet(state, action) {
    //   state.selectedDietId = action.payload;
    // },
    // removeDiet(state, action) {
    //   state.diets = state.diets.filter(d => d.id !== action.payload);
    // },
  },
});

export const { addDiet, selectDiet, removeDiet } = dietSlice.actions;
export default dietSlice.reducer;
