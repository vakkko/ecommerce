import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../consts/api.const";
import type { CartItem } from "./cartApi.types";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = sessionStorage.getItem("token");
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
    getCartItems: builder.query<CartItem[], void>({
      query: () => ({
        url: "/cart",
      }),
    }),
    deleteCartItem: builder.mutation({
      query: ({ id, color, size }) => ({
        url: `cart/products/${id}`,
        method: "DELETE",
        body: { color, size },
      }),
    }),
    changeCartQuantity: builder.mutation({
      query: ({ id, size, quantity, color }) => ({
        url: `cart/products/${id}`,
        method: "PATCH",
        body: {
          color,
          size,
          quantity,
        },
      }),
    }),
    cartCheckout: builder.mutation({
      query: ({ name, surname, email, address, zip_code }) => ({
        url: "cart/checkout",
        method: "POST",
        body: {
          name,
          surname,
          email,
          address,
          zip_code: String(zip_code),
        },
      }),
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetCartItemsQuery,
  useDeleteCartItemMutation,
  useChangeCartQuantityMutation,
  useCartCheckoutMutation,
} = cartApi;
