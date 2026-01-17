import { useState } from "react";

import PriceRemove from "./PriceRemove/PriceRemove";
import ItemImage from "./ItemImage/ItemImage";

import type { CartItem } from "../../../../store/services/cartApi/cartApi.types";

import {
  ItemDetails,
  ItemDetailsContainer,
  ItemsList,
} from "./cartItemsList.styled";
import ItemDescription from "./ItemDescription/ItemDescription";
import Quantity from "./Quantity/Quantity";

export default function CartItemsList({ data }: { data: CartItem[] }) {
  const [items, setItems] = useState(data);

  return (
    <ItemsList>
      {items.map((item, index) => (
        <li key={index}>
          <ItemImage
            cover_image={item.cover_image}
            description={item.description}
          />
          <ItemDetailsContainer>
            <ItemDetails>
              <ItemDescription
                name={item.name}
                color={item.color}
                size={item.size}
              />
              <Quantity
                setItems={setItems}
                color={item.color}
                id={item.id}
                index={index}
                quantity={item.quantity}
                size={item.size}
              />
            </ItemDetails>
            <PriceRemove
              color={item.color}
              id={item.id}
              price={item.price}
              size={item.size}
            />
          </ItemDetailsContainer>
        </li>
      ))}
    </ItemsList>
  );
}
