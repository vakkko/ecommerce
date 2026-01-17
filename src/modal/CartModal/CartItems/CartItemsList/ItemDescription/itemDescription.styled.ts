import styled from "styled-components";

export const Heading = styled.h4`
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  color: var(--darkBlue);

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const ItemAtribute = styled.span`
  font-size: 12px;
  line-height: 100%;
  color: var(--darkBlue2);
`;
