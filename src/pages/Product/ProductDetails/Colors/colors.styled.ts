import styled, { css } from "styled-components";

export const ColorBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;

  & > div {
    display: flex;
    gap: 13px;
  }
`;

export const ColorCircle = styled.div<{ $color: string }>`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  ${(props) =>
    props.$color &&
    css`
      background-color: ${props.$color};
    `}
`;
