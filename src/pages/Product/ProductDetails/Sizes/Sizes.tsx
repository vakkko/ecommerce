import type { SizesProps } from "./sizes.types";
import type { ColorProps } from "../Colors/colors.types";

import { SizeFieldset, SizeLabel } from "./sizes.styled";

export default function Sizes({
  sizes,
  setValue,
  selectedSize,
}: SizesProps & Pick<ColorProps, "setValue">) {
  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectSize = e.target.value;
    setValue("size", selectSize);
  };
  return (
    <SizeFieldset>
      <legend>Size: {selectedSize}</legend>
      {sizes?.map((size, i) => (
        <SizeLabel key={i}>
          <input
            onChange={handleSizeChange}
            name="size"
            value={size}
            type="radio"
          />
          {size}
        </SizeLabel>
      ))}
    </SizeFieldset>
  );
}
