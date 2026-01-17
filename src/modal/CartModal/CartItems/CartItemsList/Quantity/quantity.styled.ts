import styled from "styled-components";

export const QuantityBox = styled.div`
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
