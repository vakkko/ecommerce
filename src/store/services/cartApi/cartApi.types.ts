import type { Product } from "../productApi/productApi.types";

export interface CartItem extends Product {
  total_price: number;
  quantity: number;
  color: string;
  size: string;
}
