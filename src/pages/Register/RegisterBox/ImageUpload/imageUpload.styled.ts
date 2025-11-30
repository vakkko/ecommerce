import styled from "styled-components";

export const ImageUploadContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  & > button {
    font-size: 14px;
    line-height: 100%;
    color: var(--darkBlue2);
  }
`;

export const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid var(--grey2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  object-fit: cover;
`;

export const UploadText = styled.div`
  & > label {
    position: relative;
    display: inline-block;
    cursor: pointer;
    color: var(--darkBlue2);
    border-radius: 4px;
  }

  & > label > input {
    display: none;
  }

  & > button {
    margin-left: 15px;
  }
`;
