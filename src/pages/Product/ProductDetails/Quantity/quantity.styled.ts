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
    gap: 5px;
    margin-top: 16px;
  }

  & > div > input {
    width: 70px;
    height: 42px;
    text-align: center;
    border: 1px solid var(--grey2);
    border-radius: 10px;
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
    font-size: 22px;
  }
`;
