import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
    auth: localStorage.getItem("user") ? true : false,
  },
  reducers: {
    FirebaseLoginsuccess: (state, action) => {
      console.log(action.payload);
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = action.payload;
      state.auth = true;
    },
  },
});

// export const signInbyGoogleAuth = () => (dispatch) => {};

export const { FirebaseLoginsuccess } = authSlice.actions;
export const getAuthState = (state) => state.auth;

export default authSlice.reducer;
