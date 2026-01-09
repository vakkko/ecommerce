import CartItemsList from "./CartItemsList/CartItemsList";
import PaymentDetails from "./PaymentDetails/PaymentDetails";

import type { CartItem } from "../../../store/services/cartApi/cartApi.types";

export default function CartItems({ data }: { data: CartItem[] }) {
  const itemsSubtotal = data?.reduce((acc, item) => acc + item.total_price, 0);

  return (
    <>
      <CartItemsList data={data} />
      <PaymentDetails itemsSubtotal={itemsSubtotal} />
    </>
  );
}
