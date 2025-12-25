import type { QuantityProps } from "./quantity.types";

import { QuantityBox } from "./quantity.styled";

export default function Quantity({
  setValue,
  selectedQuantity,
}: QuantityProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = Number(e.target.value);
    setValue("quantity", quantity);
  };

  const handleIncrease = () => {
    setValue("quantity", selectedQuantity + 1);
  };

  const handleDecrease = () => {
    if (selectedQuantity > 1) {
      setValue("quantity", selectedQuantity - 1);
    }
  };

  return (
    <QuantityBox>
      <label htmlFor="quantity">Quantity</label>
      <div>
        <button onClick={handleDecrease}>-</button>
        <input
          onChange={handleChange}
          placeholder="0"
          type="number"
          id="quantity"
          value={selectedQuantity}
        />
        <button onClick={handleIncrease}>+</button>
      </div>
    </QuantityBox>
  );
}
