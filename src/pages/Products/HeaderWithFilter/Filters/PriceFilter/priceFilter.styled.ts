import styled from "styled-components";

export const PriceFilterBox = styled.div`
  position: absolute;
  top: 193px;
  right: 189px;
  border: 1px solid var(--grey2);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  background-color: white;

  & > h2 {
    font-weight: 600;
    font-size: 16px;
    color: var(--darkBlue);
  }

  & > div {
    margin: 20px 0 10px;
    display: flex;
    gap: 10px;
  }

  & > button {
    align-self: flex-end;
    width: 124px;
    height: 41px;
  }
`;
