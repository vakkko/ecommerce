import styled from "styled-components";

export const QuantityBox = styled.div`
  & > label {
    font-size: 16px;
    line-height: 100%;
    color: var(--darkBlue);
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 22px;
    margin-top: 16px;
    border: 1px solid var(--grey2);
    border-radius: 90px;
    width: fit-content;
    padding: 8px 16px;
  }

  & > div > input {
    text-align: center;
    width: 25px;
    border: none;
    font-family: Poppins;
    font-size: 16px;
    line-height: 100%;
    color: var(--darkBlue);

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  & > div > button {
    font-size: 25px;
    font-weight: 500;

    &:first-child {
      color: var(--grey2);
    }
  }
`;
