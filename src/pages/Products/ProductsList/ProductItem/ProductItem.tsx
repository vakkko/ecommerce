import { ImageBox, Price, ProductBox, ProductName } from "./productItem.styles";

import type { ProductProps } from "./productItem.types";

export default function Product({
  cover_image,
  description,
  price,
  name,
}: ProductProps) {
  return (
    <ProductBox>
      <ImageBox>
        <img src={cover_image} alt={description} />
      </ImageBox>
      <div>
        <ProductName>{name}</ProductName>
        <Price>${price}</Price>
      </div>
    </ProductBox>
  );
}
