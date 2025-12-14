import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "./authSlice.types";

const initialState: AuthState = {
  avatar: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAvatarImg: (state, action: PayloadAction<string>) => {
      state.avatar = action.payload;
    },
  },
});

export const { setAvatarImg } = authSlice.actions;
export default authSlice.reducer;
