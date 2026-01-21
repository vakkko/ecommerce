import CartModal from "../../modal/CartModal/CartModal";
import OrderDetails from "./OrderDetails/OrderDetails";

import { Heading } from "../../components/HeadingText/headingText.styled";

import { CheckoutContainer } from "./checkout.styled";

export default function Checkout() {
  return (
    <CheckoutContainer>
      <Heading>Checkout</Heading>
      <div>
        <OrderDetails />
        <CartModal checkout />
      </div>
    </CheckoutContainer>
  );
}
