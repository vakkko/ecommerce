import { useState } from "react";

import ItemImage from "./ItemImage/ItemImage";

import {
  useDeleteCartItemMutation,
  useGetCartItemsQuery,
  useChangeCartQuantityMutation,
} from "../../../../store/services/cartApi/cartApi";

import type { CartItem } from "../../../../store/services/cartApi/cartApi.types";
import type { ChangeItemParams, DeleteItemParams } from "./cartItemsList.types";

import {
  ItemDetails,
  ItemDetailsContainer,
  ItemsList,
  PriceRemove,
  Quantity,
} from "./cartItemsList.styled";
import ItemDescription from "./ItemDescription/ItemDescription";

export default function CartItemsList({ data }: { data: CartItem[] }) {
  const [deleteItem] = useDeleteCartItemMutation();
  const { refetch } = useGetCartItemsQuery();

  const [changeQuantity] = useChangeCartQuantityMutation();

  const handleItemDelete = ({ id, color, size }: DeleteItemParams) => {
    deleteItem({ id, color, size });
    refetch();
  };

  const [items, setItems] = useState(data);

  const handleDecrease = ({
    index,
    id,
    color,
    size,
    quantity,
  }: ChangeItemParams) => {
    if (quantity > 1) {
      changeQuantity({ id, color, size, quantity });

      setItems((prev) =>
        prev.map((itm, i) =>
          i === index ? { ...itm, quantity: itm.quantity - 1 } : itm
        )
      );
    }
  };
  const handleIncrease = ({
    index,
    id,
    color,
    size,
    quantity,
  }: ChangeItemParams) => {
    changeQuantity({ id, color, size, quantity });
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
              <Quantity>
                <button>
                  <img
                    onClick={() =>
                      handleDecrease({
                        index,
                        id: item.id,
                        color: item.color,
                        size: item.size,
                        quantity: item.quantity,
                      })
                    }
                    src="/images/minus.svg"
                    alt="minus"
                  />
                </button>
                <span>{item.quantity}</span>
                <button>
                  <img
                    onClick={() =>
                      handleIncrease({
                        index,
                        id: item.id,
                        color: item.color,
                        size: item.size,
                        quantity: item.quantity,
                      })
                    }
                    src="/images/plus.svg"
                    alt="plus"
                  />
                </button>
              </Quantity>
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
