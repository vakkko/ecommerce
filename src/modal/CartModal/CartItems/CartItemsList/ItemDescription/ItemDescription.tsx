import { Heading, ItemAtribute } from "./itemDescription.styled";
import type { ItemDescriptionProps } from "./itemDescription.types";

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
