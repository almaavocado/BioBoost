import { createSlice } from "@reduxjs/toolkit";
import { loginAPI, signUpAPI } from "./authAPI";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    signUpStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    signUpSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    },
    signUpFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  signUpStart,
  signUpSuccess,
  signUpFailure,
} = authSlice.actions;

// Thunks for asynchronous actions


export const login = ({ email, password }) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const user = await loginAPI(email, password);
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const signUp = ({ email, password }) => async (dispatch) => {
  try {
    dispatch(signUpStart());
    const user = await signUpAPI(email, password);
    dispatch(signUpSuccess(user));
  } catch (error) {
    dispatch(signUpFailure(error.message));
  }
};


export default authSlice.reducer;
