import styled from "styled-components";
import { ProductsContainer } from "../Products/products.styled";

export const CheckoutContainer = styled(ProductsContainer)`
  & > div {
    display: flex;
    margin-top: 42px;
    gap: 131px;
  }
`;
