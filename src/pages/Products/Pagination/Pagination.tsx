import { Link } from "react-router";
import type { PaginationProps } from "./pagination.types";
import { ActiveCurrentPage, PaginationNav } from "./pagination.styled";

export default function Pagination({ currentPage, lastPage }: PaginationProps) {
  if (currentPage == null || lastPage == null) {
    return null;
  }
  const showDots = lastPage - currentPage >= 3;
  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const isFirstPage = currentPage > 1 ? currentPage - 1 : currentPage;
  const isLastPage = currentPage < lastPage ? currentPage + 1 : currentPage;

  return (
    <PaginationNav>
      <ul>
        <li>
          <Link to={`/products?page=${isFirstPage}`}>
            <img src="/images/left-arrow.svg" alt="left arrow" />
          </Link>
        </li>
        {currentPage > 1 && (
          <li>
            <Link to={`/products?page=${isFirstPage}`}>{previousPage}</Link>
          </li>
        )}
        {currentPage !== lastPage && (
          <ActiveCurrentPage>
            <span>{currentPage}</span>
          </ActiveCurrentPage>
        )}
        {currentPage !== lastPage - 1 && currentPage < lastPage && (
          <li>
            <Link to={`/products?page=${isLastPage}`}>{nextPage}</Link>
          </li>
        )}
        <li>{showDots && <span>...</span>}</li>
        <li>
          <Link to={`/products?page=${lastPage}`}>{lastPage}</Link>
        </li>
        <li>
          <Link to={`/products?page=${isLastPage}`}>
            <img src="/images/right-arrow.svg" alt="right arrow" />
          </Link>
        </li>
      </ul>
    </PaginationNav>
  );
}
