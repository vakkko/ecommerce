import styled from "styled-components";

export const TitlePriceBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  margin-top: 0;

  & > h2 {
    &::first-letter {
      text-transform: uppercase;
    }
  }

  & > h2,
  & > span {
    font-weight: 600;
    font-size: 32px;
    color: var(--darkBLue);
    line-height: 100%;
  }
`;
