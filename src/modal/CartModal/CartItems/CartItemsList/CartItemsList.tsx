import type { CartItem } from "../../../../store/services/cartApi/cartApi.types";

import {
  ItemDetails,
  ItemDetailsContainer,
  ItemImageBox,
  ItemsList,
  PriceRemove,
  Quantity,
} from "./cartItemsList.styled";

import {
  useDeleteCartItemMutation,
  useGetCartItemsQuery,
} from "../../../../store/services/cartApi/cartApi";
import { useState } from "react";

export default function CartItemsList({ data }: { data: CartItem[] }) {
  const [deleteItem] = useDeleteCartItemMutation();
  const { refetch } = useGetCartItemsQuery();

  const handleItemDelete = (id: number, color: string, size: string) => {
    deleteItem({ id, color, size });
    refetch();
  };

  const [items, setItems] = useState(data);

  const handleDecrease = (index: number) => {
    setItems((prev) =>
      prev.map((itm, i) =>
        i === index ? { ...itm, quantity: itm.quantity - 1 } : itm
      )
    );
  };

  const handleIncrease = (index: number) => {
    setItems((prev) =>
      prev.map((itm, i) =>
        i === index ? { ...itm, quantity: itm.quantity + 1 } : itm
      )
    );
  };

  return (
    <ItemsList>
      {items.map((item, index) => (
        <li key={index}>
          <ItemImageBox>
            <img src={item.cover_image} alt={item.description} />
          </ItemImageBox>
          <ItemDetailsContainer>
            <ItemDetails>
              <h4>{item.name}</h4>
              <span>{item.color}</span>
              <span>{item.size}</span>
              <Quantity>
                <img
                  onClick={() => handleDecrease(index)}
                  src="/images/minus.svg"
                  alt="minus"
                />
                <span>{item.quantity}</span>
                <img
                  onClick={() => handleIncrease(index)}
                  src="/images/plus.svg"
                  alt="plus"
                />
              </Quantity>
            </ItemDetails>
            <PriceRemove>
              <span>$ {item.price}</span>
              <button
                onClick={() => handleItemDelete(item.id, item.color, item.size)}
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
