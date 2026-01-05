import Button from "../../components/Button/Button";
import { EmptyCartContainer, Sidebar, TitleAndClose } from "./cartModal.styled";
import type { CartModalProps } from "./cartModal.types";

export default function CartModal({ handleClose }: CartModalProps) {
  return (
    <Sidebar>
      <TitleAndClose>
        <h3>Shopping cart (0)</h3>
        <img onClick={handleClose} src="./images/close.svg" alt="close" />
      </TitleAndClose>
      <EmptyCartContainer>
        <img src="./images/cart-big.png" alt="Orange cart" />
        <div>
          <span>Ooops!</span>
          <p>You’ve got nothing in your cart just yet...</p>
        </div>
        <Button children="Start shopping" />
      </EmptyCartContainer>
    </Sidebar>
  );
}
