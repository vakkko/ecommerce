import type { ItemImageProps } from "./itemImage.types";

import { ItemImageBox } from "./itemImage.styled";

export default function ItemImage({
  cover_image,
  description,
}: ItemImageProps) {
  return (
    <ItemImageBox>
      <img src={cover_image} alt={description} />
    </ItemImageBox>
  );
}
