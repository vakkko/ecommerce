import { useState } from "react";
import { createPortal } from "react-dom";

import { Link } from "react-router";

import {
  useFormContext,
  type FieldValues,
  type SubmitHandler,
} from "react-hook-form";

import Button from "../../../../components/Button/Button";
import Congredulation from "../../../Congredulation/Congretulation";

import { useCartCheckoutMutation } from "../../../../store/services/cartApi/cartApi";

import type { PaymentDetailsProps } from "./paymentDetails.types";

import { PaymentContainer } from "./paymentDetails.styled";

export default function PaymentDetails({
  itemsSubtotal,
  handleClose,
  checkout,
}: PaymentDetailsProps) {
  const [paid, setPaid] = useState<boolean>(false);

  const delivery = 5;
  const total = delivery + itemsSubtotal;

  const { handleSubmit } = useFormContext() ?? "";
  const [payCheckout] = useCartCheckoutMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await payCheckout(data).unwrap();
      setPaid(true);
    } catch (err) {
      console.error("Chekcout failed", err);
    }
  };

  return (
    <>
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
      {paid && createPortal(<Congredulation />, document.body)}
    </>
  );
}
