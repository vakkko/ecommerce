import styled from "styled-components";

export const InputCont = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

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

  & > img {
    position: absolute;
    top: 11.5px;
    right: 13.65px;
  }
`;

export const ErrMsg = styled.p`
  font-weight: 300;
  font-size: 10px;
  color: var(--red);
  line-height: 100%;
  margin-top: 4px;
`;
