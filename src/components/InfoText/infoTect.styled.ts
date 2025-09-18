import styled from "styled-components";

export const StyledText = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  gap: 8px;
  & > p,
  & > span {
    font-size: 14px;
    line-height: 100%;
  }
  & > p {
    color: var(--darkBlue2);
  }

  & > a {
    color: var(--red);
  }
`;
