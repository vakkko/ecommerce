import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ActiveImageType } from "./activeImageSlice.types";

const initialState: ActiveImageType = {
  index: 0,
};

const activeImageSlice = createSlice({
  name: "activeImage",
  initialState,
  reducers: {
    setActiveImage: (state, action: PayloadAction<number>) => {
      state.index = action.payload;
    },
  },
});

export const { setActiveImage } = activeImageSlice.actions;
export default activeImageSlice.reducer;
