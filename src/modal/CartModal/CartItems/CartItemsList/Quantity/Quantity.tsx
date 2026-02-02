import { useChangeCartQuantityMutation } from "../../../../../store/services/cartApi/cartApi";

import type { ChangeItemParams } from "../cartItemsList.types";
import type { QuantityProps } from "./quantity.types";

import { QuantityBox } from "./quantity.styled";

export default function Quantity({
  index,
  quantity,
  id,
  color,
  size,
}: QuantityProps) {
  const [changeQuantity] = useChangeCartQuantityMutation();

  const handleDecrease = ({ id, color, size, quantity }: ChangeItemParams) => {
    if (quantity > 1) {
      changeQuantity({ id, color, size, quantity: quantity - 1 });
    }
  };
  const handleIncrease = ({ id, color, size, quantity }: ChangeItemParams) => {
    changeQuantity({ id, color, size, quantity: quantity + 1 });
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
