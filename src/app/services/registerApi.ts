import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const registerApiSlice = createApi({
  reducerPath: "register",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.redseam.redberryinternship.ge/api",
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = registerApiSlice;
