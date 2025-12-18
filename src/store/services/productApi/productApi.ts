import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../consts/api.const";
import type { ProductsApiResponse } from "./productApi.types";

export const productApiSlice = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<
      ProductsApiResponse,
      {
        page: number;
        from: number | undefined;
        to: number | undefined;
        sort: string | undefined;
      }
    >({
      query: ({ page, from, to, sort }) => {
        let url = `/products?page=${page}`;
        if (from !== undefined) url += `&filter%5Bprice_from%5D=${from}`;
        if (to !== undefined) url += `&filter%5Bprice_to%5D=${to}`;
        if (sort !== undefined) url += `&sort=${sort}`;

        return url;
      },
    }),
  }),
});

export const { useGetProductsQuery } = productApiSlice;
