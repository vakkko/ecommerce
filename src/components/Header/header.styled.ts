import styled from "styled-components";

export const HeaderCont = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 100px 28px;
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  & > h1 {
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    color: var(--darkBlue);
  }
`;

export const RegisterBox = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;

  & > a {
    font-weight: 500;
    font-size: 12px;
    line-height: 100%;
    color: var(--darkBlue);
  }
`;

export const AvatarImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;
