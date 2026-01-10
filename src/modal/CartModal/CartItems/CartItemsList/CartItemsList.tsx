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

export default function CartItemsList({ data }: { data: CartItem[] }) {
  const [deleteItem] = useDeleteCartItemMutation();
  const { refetch } = useGetCartItemsQuery();

  const handleItemDelete = (id: number, color: string, size: string) => {
    deleteItem({ id, color, size });
    refetch();
  };

  return (
    <ItemsList>
      {data.map((item, index) => (
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
                <img src="/images/minus.svg" alt="minus" />
                <span>{item.quantity}</span>
                <img src="/images/plus.svg" alt="plus" />
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
