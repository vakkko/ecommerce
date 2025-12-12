import { configureStore } from "@reduxjs/toolkit";

import { authApiSlice } from "./services/authApi";
import { productApiSlice } from "./services/productApi/productApi";

export const store = configureStore({
  reducer: {
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [productApiSlice.reducerPath]: productApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApiSlice.middleware,
      productApiSlice.middleware
    ),
});
