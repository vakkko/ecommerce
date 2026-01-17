import styled from "styled-components";

export const ItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-top: 63px;

  & > li {
    display: flex;
    gap: 17px;
  }
`;

export const ItemDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 52px;
  padding: 8.5px 0;
  width: 100%;
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PriceRemove = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
