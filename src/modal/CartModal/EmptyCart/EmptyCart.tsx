import Button from "../../../components/Button/Button";

import type { CartModalProps } from "../cartModal.types";

import { EmptyCartContainer } from "./emptyCart.styled";

export default function EmptyCart({ handleClose }: CartModalProps) {
  return (
    <EmptyCartContainer>
      <img src="/images/cart-big.png" alt="Orange cart" />
      <div>
        <span>Ooops!</span>
        <p>You’ve got nothing in your cart just yet...</p>
      </div>
      <Button handleSubmit={handleClose} children="Start shopping" />
    </EmptyCartContainer>
  );
}
