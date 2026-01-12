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

export const ItemImageBox = styled.div`
  padding: 17px 10px;
  border-radius: 10px;
  border: 1px solid var(--grey2);

  & > img {
    width: 70px;
    height: 100px;
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

  & > h4 {
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    color: var(--darkBlue);

    &::first-letter {
      text-transform: uppercase;
    }
  }

  & > span {
    font-size: 12px;
    line-height: 100%;
    color: var(--darkBlue2);
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: auto;
  border: 1px solid var(--grey2);
  border-radius: 22px;
  padding: 4px 8px;
  width: fit-content;

  & > button {
    display: flex;
    align-items: center;
  }

  & > span {
    font-size: 12px;
    line-height: 100%;
    color: var(--darkBlue2);
  }
`;

export const PriceRemove = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
