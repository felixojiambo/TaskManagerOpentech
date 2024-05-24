/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { user } from "../../assets/data";

const initialState = {
  user: localStorage.getItem("userInfo")
   ? JSON.parse(localStorage.getItem("userInfo"))
    : user,
  isSidebarOpen: false,
  loading: false, // Initialize loading state
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCredentials: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      state.loading = false; // Reset loading after successful operation
    },
    logout: (state, action) => {
      state.user = null;
      localStorage.removeItem("userInfo");
      state.loading = false; // Reset loading after logout
    },
    setOpenSidebar: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
    registerStart: (state) => {
      state.loading = true; // Indicate start of registration process
    },
    registerSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false; // Reset loading after successful registration
    },
    registerFailure: (state) => {
      state.loading = false; // Reset loading after failed registration
    },
    loginStart: (state) => {
      state.loading = true; // Indicate start of login process
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false; // Reset loading after successful login
    },
    loginFailure: (state) => {
      state.loading = false; // Reset loading after failed login
    },
  },
});

export const {
  setLoading,
  setCredentials,
  logout,
  setOpenSidebar,
  registerStart,
  registerSuccess,
  registerFailure,
  loginStart,
  loginSuccess,
  loginFailure,
} = authSlice.actions;

export default authSlice.reducer;
