import { QuantityBox } from "./quantity.styled";

export default function Quantity() {
  return (
    <QuantityBox>
      <label htmlFor="quantity">Quantity</label>
      <div>
        <button>-</button>
        <input placeholder="0" type="number" id="quantity" />
        <button>+</button>
      </div>
    </QuantityBox>
  );
}
