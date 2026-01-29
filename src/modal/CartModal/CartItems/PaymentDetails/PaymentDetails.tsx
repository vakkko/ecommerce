import { Link } from "react-router";

import type { PaymentDetailsProps } from "./paymentDetails.types";

import { PaymentContainer } from "./paymentDetails.styled";

import Button from "../../../../components/Button/Button";
import {
  useFormContext,
  type FieldValues,
  type SubmitHandler,
} from "react-hook-form";

import { useCartCheckoutMutation } from "../../../../store/services/cartApi/cartApi";

export default function PaymentDetails({
  itemsSubtotal,
  handleClose,
  checkout,
}: PaymentDetailsProps) {
  const delivery = 5;
  const total = delivery + itemsSubtotal;

  const { handleSubmit } = useFormContext() ?? "";
  const [payCheckout] = useCartCheckoutMutation();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    payCheckout(data);
  };
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
      {checkout ? (
        <Button handleSubmit={handleSubmit(onSubmit)} type="submit">
          Pay
        </Button>
      ) : (
        <Link onClick={handleClose} to={"/checkout"}>
          Go to checkout
        </Link>
      )}
    </PaymentContainer>
  );
}
