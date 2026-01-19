import styled, { css } from "styled-components";

export const InputCont = styled.div<{ $fullWidth: boolean | undefined }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 50px;
  ${(props) =>
    props.$fullWidth &&
    css`
      grid-column: span 2;
    `}

  & > input {
    width: 100%;
    border: 1px solid var(--grey2);
    border-radius: 8px;
    padding: 10.5px 0 10.5px 12px;
    color: var(--darkBlue2);
    font-size: 14px;
  }

  * > span {
    color: var(--red);
    font-size: 14px;
  }

  & > label {
    position: absolute;
    top: 8.5px;
    left: 12px;
    color: var(--darkBlue2);
  }
`;

export const ErrMsg = styled.p`
  font-weight: 300;
  font-size: 10px;
  color: var(--red);
  line-height: 100%;
  margin-top: 10px;
`;

export const EyeImg = styled.img`
  position: absolute;
  top: 13.5px;
  right: 13.65px;
  cursor: pointer;
`;
