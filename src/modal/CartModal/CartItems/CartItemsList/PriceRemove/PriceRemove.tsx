import { useDeleteCartItemMutation } from "../../../../../store/services/cartApi/cartApi";

import type { DeleteItemParams } from "../cartItemsList.types";
import type { PriceRemoveProps } from "./priceRemove.types";

import { PriceRemoveBox } from "./priceRemove.styled";

export default function PriceRemove({
  price,
  id,
  color,
  size,
}: PriceRemoveProps) {
  const [deleteItem] = useDeleteCartItemMutation();
  const handleItemDelete = ({ id, color, size }: DeleteItemParams) => {
    deleteItem({ id, color, size });
  };
  return (
    <PriceRemoveBox>
      <span>$ {price}</span>
      <button
        onClick={() =>
          handleItemDelete({
            id,
            color,
            size,
          })
        }
      >
        Remove
      </button>
    </PriceRemoveBox>
  );
}
