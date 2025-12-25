import type { SizesProps } from "./sizes.types";

import { SizeFieldset, SizeLabel } from "./sizes.styled";

export default function Sizes({ sizes }: SizesProps) {
  return (
    <SizeFieldset>
      <legend>Size:</legend>
      {sizes?.map((size) => (
        <SizeLabel>
          <input name="size" value={size} type="radio" />
          {size}
        </SizeLabel>
      ))}
    </SizeFieldset>
  );
}
