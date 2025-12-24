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

export const CircleWrapper = styled.div<{ $active: boolean }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  ${(props) =>
    props.$active &&
    css`
      border: 2px solid var(--grey2);
    `}
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
