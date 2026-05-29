import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import productReducer from './Slice/ProductSlice'
import dietReducer from './Slice/DietSlicee';
import workoutReducer from './Slice/WorkoutTrainerSlice';
import authReducer from './Slice/authSlice'

const store = configureStore({
  reducer: {
    product: productReducer,
    diet: dietReducer,
    workout: workoutReducer,
    auth: authReducer,
  },
});

export default store;
