import { useSearchParams } from "react-router";
import type { PaginationProps } from "./pagination.types";
import { ActiveCurrentPage, PaginationNav } from "./pagination.styled";

export default function Pagination({ currentPage, lastPage }: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  if (currentPage == null || lastPage == null) {
    return null;
  }

  const showDots = lastPage - currentPage >= 3;
  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const isFirstPage = currentPage > 1 ? currentPage - 1 : currentPage;
  const isLastPage = currentPage < lastPage ? currentPage + 1 : currentPage;

  const goToPage = (newPage: number) => {
    searchParams.set("page", String(newPage));
    setSearchParams(searchParams);
  };

  const onLastPage = currentPage === lastPage;

  return (
    <PaginationNav>
      <ul>
        <li>
          <button onClick={() => goToPage(isFirstPage)}>
            <img src="/images/left-arrow.svg" alt="left arrow" />
          </button>
        </li>
        {currentPage > 1 && (
          <li>
            <button onClick={() => goToPage(isFirstPage)}>
              {previousPage}
            </button>
          </li>
        )}

        <ActiveCurrentPage>
          <span>{currentPage}</span>
        </ActiveCurrentPage>

        {currentPage !== lastPage - 1 && currentPage < lastPage && (
          <li>
            <button onClick={() => goToPage(isLastPage)}>{nextPage}</button>
          </li>
        )}
        {showDots && (
          <li>
            <span>...</span>
          </li>
        )}
        {!onLastPage && (
          <li>
            <button onClick={() => goToPage(lastPage)}>{lastPage}</button>
          </li>
        )}
        <li>
          <button onClick={() => goToPage(isLastPage)}>
            <img src="/images/right-arrow.svg" alt="right arrow" />
          </button>
        </li>
      </ul>
    </PaginationNav>
  );
}
