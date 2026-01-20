import type { CartItem } from "../../../store/services/cartApi/cartApi.types";

export interface CartItemsProps {
  data: CartItem[];
  handleClose: () => void;
}
