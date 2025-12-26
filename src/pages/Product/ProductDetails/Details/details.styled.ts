import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > h4 {
      font-size: 20px;
      line-height: 100%;
      color: var(--darkBlue);
    }

    & > img {
      width: 109px;
      height: 61px;
    }
  }
`;
