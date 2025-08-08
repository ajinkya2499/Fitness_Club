import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import productReducer from '../Pages/Products/ProductSlice'
import dietReducer from '../Pages/DietNutrition/DietSlicee';
import workoutReducer from '../Pages/WorkoutTrainer/WorkoutTrainerSlice';
import authReducer from '../Components/EntryPages/authSlice'

const store = configureStore({
  reducer: {
    product: productReducer,
    diet: dietReducer,
    workout: workoutReducer,
    auth: authReducer,
  },
});

export default store;
