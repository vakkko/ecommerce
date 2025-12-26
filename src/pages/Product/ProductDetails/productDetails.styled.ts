import styled from "styled-components";

export const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }
`;

export const HorizontalLine = styled.hr`
  border-color: var(--grey2);
`;
