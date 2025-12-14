import { configureStore } from "@reduxjs/toolkit";

import { authApiSlice } from "./services/authApi";
import { productApiSlice } from "./services/productApi/productApi";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [productApiSlice.reducerPath]: productApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApiSlice.middleware,
      productApiSlice.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
