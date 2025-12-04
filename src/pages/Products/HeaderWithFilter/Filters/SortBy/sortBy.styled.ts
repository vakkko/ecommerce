import styled from "styled-components";

export const SortBYBox = styled.div`
  position: absolute;
  top: 193px;
  right: 98px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border: 1px solid var(--grey2);
  border-radius: 8px;
  padding: 16px 62px 24px 16px;

  & > h4 {
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    color: var(--darkBlue);
  }

  & > button {
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
  }
`;
