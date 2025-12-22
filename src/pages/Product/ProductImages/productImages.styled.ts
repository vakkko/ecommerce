import styled from "styled-components";

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 49px;
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

export const OtherImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  height: fit-content;
  & > img {
    width: 121px;
    height: 161.33px;
  }
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
