import type { Product } from "../../../store/services/productApi/productApi.types";

export type InputValues = {
  color: string;
  size: string;
  quantity: number;
};

export interface ProductDetailsProps {
  data: Product | undefined;
}
