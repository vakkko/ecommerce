import { useChangeCartQuantityMutation } from "../../../../../store/services/cartApi/cartApi";

import type { ChangeItemParams } from "../cartItemsList.types";
import type { QuantityProps } from "./quantity.types";

import { QuantityBox } from "./quantity.styled";

export default function Quantity({
  setItems,
  index,
  quantity,
  id,
  color,
  size,
}: QuantityProps) {
  const [changeQuantity] = useChangeCartQuantityMutation();

  const handleDecrease = ({
    index,
    id,
    color,
    size,
    quantity,
  }: ChangeItemParams) => {
    if (quantity > 1) {
      changeQuantity({ id, color, size, quantity });

      setItems((prev) =>
        prev.map((itm, i) =>
          i === index ? { ...itm, quantity: itm.quantity - 1 } : itm
        )
      );
    }
  };
  const handleIncrease = ({
    index,
    id,
    color,
    size,
    quantity,
  }: ChangeItemParams) => {
    changeQuantity({ id, color, size, quantity });
    setItems((prev) =>
      prev.map((itm, i) =>
        i === index ? { ...itm, quantity: itm.quantity + 1 } : itm
      )
    );
  };

  return (
    <QuantityBox>
      <button>
        <img
          onClick={() =>
            handleDecrease({
              index,
              id,
              color,
              size,
              quantity,
            })
          }
          src="/images/minus.svg"
          alt="minus"
        />
      </button>
      <span>{quantity}</span>
      <button>
        <img
          onClick={() =>
            handleIncrease({
              index,
              id,
              color,
              size,
              quantity,
            })
          }
          src="/images/plus.svg"
          alt="plus"
        />
      </button>
    </QuantityBox>
  );
}
