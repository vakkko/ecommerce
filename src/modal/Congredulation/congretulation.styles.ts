import styled from "styled-components";

const FlexColomnCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CongratsContainer = styled(FlexColomnCenter)`
  position: absolute;
  width: 45%;
  height: 54.6%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding-top: 30px;
  padding-right: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);

  & > button {
    align-self: flex-end;
  }
`;

export const CongratsMessage = styled(FlexColomnCenter)`
  margin-top: 44px;

  & > div {
    margin-top: 40px;
    margin-bottom: 74px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    & > p {
      font-size: 14px;
      line-height: 100%;
      color: var(--darkBlue2);
    }
  }

  & > button {
    padding: 14px 40px;
  }
`;
