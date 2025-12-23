import styled, { css } from "styled-components";

export const ImagesContainer = styled.div`
  & > h4 {
    font-weight: 300;
    font-size: 14px;
    line-height: 100%;
    color: var(--darkBlue);
  }
`;

export const Images = styled.div`
  display: flex;
  gap: 24px;

  & img {
    cursor: pointer;
  }
`;

export const SidebarImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  height: fit-content;
`;

export const SidebarImage = styled.img<{ $active: boolean }>`
  width: 121px;
  height: 161.33px;

  ${(props) =>
    props.$active &&
    css`
      border: 5px solid var(--grey);
      border-radius: 5px;
    `}
`;

export const CoverImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 703px;
  height: 937px;
  background-color: var(--grey);

  & > img {
    width: 500px;
    height: 750px;
  }
`;
