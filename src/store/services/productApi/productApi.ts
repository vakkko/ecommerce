import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../consts/api.const";
import type { ProductsApiResponse } from "./productApi.types";

export const productApiSlice = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductsApiResponse, { page: number }>({
      query: ({ page }) => `/products?page=${page}`,
    }),
  }),
});

export const { useGetProductsQuery } = productApiSlice;
