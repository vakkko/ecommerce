import styled from "styled-components";

export const InputCont = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > input {
    width: 100%;
    border: 1px solid var(--gray2);
    border-radius: 8px;
    padding: 10.5px 0 10.5px 12px;
    color: var(--darkBlue2);
  }

  * > span {
    color: var(--red);
    font-size: 14px;
  }

  & > label {
    position: absolute;
    top: 6.5px;
    left: 12px;
    color: var(--darkBlue2);
  }

  & > img {
    position: absolute;
    top: 11.5px;
    right: 13.65px;
  }
`;
