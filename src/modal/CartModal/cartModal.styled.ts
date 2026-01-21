import styled, { css } from "styled-components";

export const Sidebar = styled.div<{ $checkout?: boolean }>`
  ${(props) =>
    props.$checkout
      ? css`
          width: 23.9%;
        `
      : css`
          position: fixed;
          top: 0;
          right: 0;
          width: 28.12%;
          height: 100%;
          background-color: white;
          padding: 40px;
          overflow-y: scroll;
          overflow-x: hidden;
        `}
`;

export const TitleAndClose = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 63px;
  & > img {
    cursor: pointer;
  }
`;
