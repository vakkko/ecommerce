import styled from "styled-components";

export const Sidebar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 28.12%;
  height: 100%;
  background-color: white;
  padding: 40px;
`;

export const TitleAndClose = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > img {
    cursor: pointer;
  }
`;

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
