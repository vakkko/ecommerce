import styled from "styled-components";

export const HeaderWithFilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  & > h1 {
    font-weight: 600;
    font-size: 42px;
    line-height: 100%;
    color: var(--darkBlue);
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 32px;
  }
`;
