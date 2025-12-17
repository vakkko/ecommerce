import styled from "styled-components";

export const PaginationNav = styled.nav`
  margin-top: 90px;
  & > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }

  & > ul > li:not(:first-child):not(:last-child) {
    width: 32px;
    height: 32px;
    border: 1px solid var(--grey);
    border-radius: 4px;
  }

  & > ul > li > button,
  & > ul > li:not(:first-child):not(:last-child) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > ul > li:not(:first-child):not(:last-child) > a,
  & > ul > li > span {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: var(--darkGrey);
  }
`;

export const ActiveCurrentPage = styled.li`
  cursor: pointer;
  border: 1px solid var(--red) !important;

  & > span {
    color: var(--red) !important;
  }
`;
