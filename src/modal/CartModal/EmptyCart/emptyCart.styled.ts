import styled from "styled-components";

export const EmptyCartContainer = styled.div`
  margin-top: 151px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 24px;
    margin-bottom: 58px;

    & > span {
      font-weight: 600;
      font-size: 24px;
      line-height: 100%;
      color: var(--darkBlue);
    }

    & > p {
      font-size: 14px;
      line-height: 100%;
      color: var(--darkBlue2);
    }
  }

  & > button {
    padding: 10px 56px;
  }
`;
