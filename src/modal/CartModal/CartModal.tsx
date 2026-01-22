import { useGetCartItemsQuery } from "../../store/services/cartApi/cartApi";

import type { CartModalProps } from "./cartModal.types";

import EmptyCart from "./EmptyCart/EmptyCart";
import CartItems from "./CartItems/CartItems";

import { Sidebar, TitleAndClose } from "./cartModal.styled";

export default function CartModal({ handleClose, checkout }: CartModalProps) {
  const { data } = useGetCartItemsQuery();

  const isEmpty = !data || data.length === 0;

  return (
    <Sidebar $checkout={checkout}>
      {!checkout && (
        <TitleAndClose>
          <h3>Shopping cart ({isEmpty ? "0" : data.length})</h3>
          <img onClick={handleClose} src="/images/close.svg" alt="close" />
        </TitleAndClose>
      )}
      {isEmpty ? (
        <EmptyCart handleClose={handleClose} />
      ) : (
        <CartItems checkout={checkout} handleClose={handleClose} data={data} />
      )}
    </Sidebar>
  );
}
