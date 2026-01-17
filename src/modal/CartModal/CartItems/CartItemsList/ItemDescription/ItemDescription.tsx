import type { ItemDescriptionProps } from "./itemDescription.types";

import { Heading, ItemAtribute } from "./itemDescription.styled";

export default function ItemDescription({
  name,
  color,
  size,
}: ItemDescriptionProps) {
  return (
    <>
      <Heading>{name}</Heading>
      <ItemAtribute>{color}</ItemAtribute>
      <ItemAtribute>{size}</ItemAtribute>
    </>
  );
}
