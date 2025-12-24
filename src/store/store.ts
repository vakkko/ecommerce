import { configureStore } from "@reduxjs/toolkit";

import { authApiSlice } from "./services/authApi";
import { productApiSlice } from "./services/productApi/productApi";
import authReducer from "./slices/AuthSlice/authSlice";
import activeImg from "./slices/ActiveImgSlice/activeImageSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    activeImg,
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
