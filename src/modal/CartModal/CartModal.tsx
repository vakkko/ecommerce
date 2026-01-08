import { useGetCartItemsQuery } from "../../store/services/cartApi/cartApi";

import Button from "../../components/Button/Button";

import type { CartModalProps } from "./cartModal.types";

import { EmptyCartContainer, Sidebar, TitleAndClose } from "./cartModal.styled";

export default function CartModal({ handleClose }: CartModalProps) {
  const { data } = useGetCartItemsQuery();

  return (
    <Sidebar>
      <TitleAndClose>
        <h3>Shopping cart (0)</h3>
        <img onClick={handleClose} src="./images/close.svg" alt="close" />
      </TitleAndClose>
      <EmptyCartContainer>
        <img src="/images/cart-big.png" alt="Orange cart" />
        <div>
          <span>Ooops!</span>
          <p>You’ve got nothing in your cart just yet...</p>
        </div>
        <Button children="Start shopping" />
      </EmptyCartContainer>
    </Sidebar>
  );
}
