import Button from "../../components/Button/Button";
import { Sidebar } from "./cartModal.styled";

export default function CartModal() {
  return (
    <Sidebar>
      <div>
        <h3>Shopping cart (0)</h3>
        <img src="./images/close.svg" alt="close" />
      </div>
      <div>
        <img src="./images/cart-big.png" alt="Orange cart" />
        <p>You’ve got nothing in your cart just yet...</p>
        <Button children="You’ve got nothing in your cart just yet..." />
      </div>
    </Sidebar>
  );
}
