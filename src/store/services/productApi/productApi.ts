import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../consts/api.const";
import type {
  ProductsApiResponse,
  GetProductsParams,
} from "./productApi.types";

export const productApiSlice = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductsApiResponse, GetProductsParams>({
      query: ({ page, from, to, sort, id }) => {
        const params = new URLSearchParams();
        if (page !== undefined) params.set("page", page);
        if (from !== undefined) params.set("filter[price_from]", from);
        if (to !== undefined) params.set("filters[price_to]", to);
        if (sort !== undefined) params.set("sort", sort);

        const base = id !== undefined ? `/products/${id}` : "/products";
        const qs = params.toString();

        return qs ? `${base}?${qs}` : base;
      },
    }),
  }),
});

export const { useGetProductsQuery } = productApiSlice;
