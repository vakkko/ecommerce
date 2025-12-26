import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../consts/api.const";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: ({ id, color, quantity, size }) => ({
        url: `/cart/products/${id}`,
        method: "POST",
        body: { color, quantity, size },
      }),
    }),
  }),
});

export const { useAddToCartMutation } = cartApi;
