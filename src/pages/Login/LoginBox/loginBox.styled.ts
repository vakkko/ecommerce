import styled from "styled-components";

export const LoginCont = styled.div`
  width: 28.9%;
  display: flex;
  flex-direction: column;

  & > form {
    display: flex;
    flex-direction: column;
    gap: 24px;
    height: 240px;
  }

  & > h2 {
    margin-bottom: 48px;
  }
`;

export const ButtonBox = styled.div`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  & > button {
    width: 100%;
  }
`;
