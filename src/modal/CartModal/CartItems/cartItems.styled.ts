import styled, { css } from "styled-components";

export const CartItemsContainer = styled.div<{ $checkout?: boolean }>`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  ${(props) =>
    props.$checkout &&
    css`
      gap: 81px;
    `}
`;
