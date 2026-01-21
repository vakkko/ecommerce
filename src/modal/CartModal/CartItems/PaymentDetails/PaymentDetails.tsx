import { Link } from "react-router";

import type { PaymentDetailsProps } from "./paymentDetails.types";

import { PaymentContainer } from "./paymentDetails.styled";

export default function PaymentDetails({
  itemsSubtotal,
  handleClose,
  checkout,
}: PaymentDetailsProps) {
  const delivery = 5;
  const total = delivery + itemsSubtotal;
  return (
    <PaymentContainer $checkout={checkout}>
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
      <Link onClick={handleClose} to={checkout ? "#" : "/checkout"}>
        {checkout ? "Pay" : "Go to checkout"}
      </Link>
    </PaymentContainer>
  );
}
