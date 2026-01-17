import { useState } from "react";

import ItemImage from "./ItemImage/ItemImage";

import {
  useDeleteCartItemMutation,
  useGetCartItemsQuery,
} from "../../../../store/services/cartApi/cartApi";

import type { CartItem } from "../../../../store/services/cartApi/cartApi.types";
import type { DeleteItemParams } from "./cartItemsList.types";

import {
  ItemDetails,
  ItemDetailsContainer,
  ItemsList,
  PriceRemove,
} from "./cartItemsList.styled";
import ItemDescription from "./ItemDescription/ItemDescription";
import Quantity from "./Quantity/Quantity";

export default function CartItemsList({ data }: { data: CartItem[] }) {
  const [deleteItem] = useDeleteCartItemMutation();
  const { refetch } = useGetCartItemsQuery();

  const handleItemDelete = ({ id, color, size }: DeleteItemParams) => {
    deleteItem({ id, color, size });
    refetch();
  };

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
            <PriceRemove>
              <span>$ {item.price}</span>
              <button
                onClick={() =>
                  handleItemDelete({
                    id: item.id,
                    color: item.color,
                    size: item.size,
                  })
                }
              >
                Remove
              </button>
            </PriceRemove>
          </ItemDetailsContainer>
        </li>
      ))}
    </ItemsList>
  );
}
