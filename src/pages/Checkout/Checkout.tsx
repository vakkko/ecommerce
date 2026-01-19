import OrderDetails from "./OrderDetails/OrderDetails";

import { CheckoutContainer } from "./checkout.styled";

export default function Checkout() {
  return (
    <CheckoutContainer>
      <OrderDetails />
    </CheckoutContainer>
  );
}
