import type { CartItem } from "../../../../store/services/cartApi/cartApi.types";

import {
  ItemDetails,
  ItemDetailsContainer,
  ItemImageBox,
  ItemsList,
  PriceRemove,
  Quantity,
} from "./cartItemsList.styled";

export default function CartItemsList({ data }: { data: CartItem[] }) {
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
              <button>Remove</button>
            </PriceRemove>
          </ItemDetailsContainer>
        </li>
      ))}
    </ItemsList>
  );
}
