import type { CartItemsProps } from "./cartItems.types";
import CartItemsList from "./CartItemsList/CartItemsList";

import PaymentDetails from "./PaymentDetails/PaymentDetails";

export default function CartItems({ data, handleClose }: CartItemsProps) {
  const itemsSubtotal = data?.reduce((acc, item) => acc + item.total_price, 0);

  return (
    <>
      <CartItemsList data={data} />
      <PaymentDetails handleClose={handleClose} itemsSubtotal={itemsSubtotal} />
    </>
  );
}
