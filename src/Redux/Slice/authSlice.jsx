import { createSlice } from '@reduxjs/toolkit';

// Persisted user
const savedUser = JSON.parse(localStorage.getItem('user'));

const initialState = {
  isAuthenticated: !!savedUser,
  user: savedUser,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('user');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('password');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
