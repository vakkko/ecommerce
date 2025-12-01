import { configureStore } from "@reduxjs/toolkit";
import { registerApiSlice } from "./services/registerApi";

export const store = configureStore({
  reducer: {
    [registerApiSlice.reducerPath]: registerApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(registerApiSlice.middleware),
});
