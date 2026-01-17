import type { Dispatch, SetStateAction } from "react";
import type { CartItem } from "../../../../../store/services/cartApi/cartApi.types";

export interface QuantityProps {
  setItems: Dispatch<SetStateAction<CartItem[]>>;
  index: number;
  quantity: number;
  id: number;
  color: string;
  size: string;
}
