import Button from "../../../../components/Button/Button";

import type { PaymentDetailsProps } from "./paymentDetails.types";

import { PaymentContainer } from "./paymentDetails.styled";

export default function PaymentDetails({ itemsSubtotal }: PaymentDetailsProps) {
  const delivery = 5;
  const total = delivery + itemsSubtotal;
  return (
    <PaymentContainer>
      <dl>
        <div>
          <dt>Items subtotal</dt>
          <dd>{itemsSubtotal}</dd>
        </div>
        <div>
          <dt>Delivery</dt>
          <dd>{delivery}</dd>
        </div>
        <div>
          <dt>Total</dt>
          <dd>{total}</dd>
        </div>
      </dl>
      <Button>Go to checkout</Button>
    </PaymentContainer>
  );
}
