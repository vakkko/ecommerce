import type { Product } from "../../../../store/services/productApi/productApi.types";
import { TitlePriceBox } from "./titlePrice.styled";

export default function TitlePrice({
  namePrice,
}: {
  namePrice: { name?: Product["name"]; price?: Product["price"] };
}) {
  return (
    <TitlePriceBox>
      <h2>{namePrice.name}</h2>
      <span>$ {namePrice.price}</span>
    </TitlePriceBox>
  );
}
