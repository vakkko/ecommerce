import styled from "styled-components";

export const ProductContainer = styled.div`
  margin: 30px 100px 30px;
  display: flex;
  gap: 49px;
  flex-direction: column;

  & > div {
    display: flex;
    gap: 168px;
  }

  & > h4 {
    font-weight: 300;
    font-size: 14px;
    line-height: 100%;
    color: var(--darkBlue);
  }
`;
