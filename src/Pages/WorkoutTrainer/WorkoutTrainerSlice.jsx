import { createSlice } from "@reduxjs/toolkit";

const initialState={
    workout:[
{
      id: 1,
      name: 'Back Workout',
      description: 'Low-carb, high-protein diet for reducing weight.',
    },
    {
      id: 2,
      name: 'Chest Workout',
      description: 'High-protein and calorie-rich diet for muscle gain.',
    },
     {
      id: 3,
      name: 'Arms Workout',
      description: 'High-protein and calorie-rich diet for muscle gain.',
    },
     {
      id: 4,
      name: 'legs Workout',
      description: 'High-protein and calorie-rich diet for muscle gain.',
    },
     {
      id: 5,
      name: 'Sholder Workout',
      description: 'High-protein and calorie-rich diet for muscle gain.',
    },
     {
      id: 6,
      name: 'Core Workout',
      description: 'High-protein and calorie-rich diet for muscle gain.',
    },],
    selectedWorkoutId: null,

}

const WorkoutSlice= createSlice({
    name:'workout',
    initialState,
    reducers:{
    selectWorkout: (state, action) => {
      state.selectedWorkoutId = action.payload; // 👉 store selected workout ID
    }, 
    },

})

export const { selectWorkout } = WorkoutSlice.actions;
export default WorkoutSlice.reducer;