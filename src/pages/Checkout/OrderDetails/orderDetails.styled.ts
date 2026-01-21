import styled from "styled-components";

export const DetailsContainer = styled.div`
  width: 58.8%;
  background-color: var(--grey);
  border-radius: 16px;
  padding-top: 72px;
  padding-left: 47px;

  & > h2 {
    font-weight: 500;
    font-size: 22px;
    line-height: 100%;
    margin-bottom: 46px;
  }

  & > div {
    width: 50%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    column-gap: 24px;
    row-gap: 33px;
  }
`;
