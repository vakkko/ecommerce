import styled from "styled-components";

export const ProductBox = styled.li`
  border-radius: 10px;
`;

export const ImageBox = styled.div`
  background-color: var(--grey);
  padding: 70px 0;
  display: flex;
  justify-content: center;
  & > img {
    width: 280px;
  }
`;

export const Price = styled.p`
  font-weight: 500;
  font-style: Medium;
  font-size: 16px;
  color: var(--darkBlue);
`;

export const ProductName = styled(Price)`
  font-size: 18px;

  &::first-letter {
    text-transform: capitalize;
  }
`;
