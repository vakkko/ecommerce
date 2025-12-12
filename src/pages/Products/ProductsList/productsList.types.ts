import type { ProductsApiResponse } from "../../../store/services/productApi/productApi.types";

export interface ProductsListProps {
  data: ProductsApiResponse | undefined;
}
