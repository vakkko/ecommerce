import { useState } from "react";
import { FilterBox } from "./filter.styled";
import PriceFilter from "./PriceFilter/PriceFilter";
import SortBy from "./SortBy/SortBy";

export default function Filters() {
  const [showPriceFilter, setShowPriceFilter] = useState<boolean>(false);
  const [showSortBy, setShowSortBy] = useState<boolean>(false);

  const handleFilterClick = () => {
    setShowPriceFilter((prev) => !prev);
    setShowSortBy(false);
  };

  const handleSortByClick = () => {
    setShowSortBy((prev) => !prev);
    setShowPriceFilter(false);
  };

  return (
    <>
      <FilterBox>
        <button onClick={handleFilterClick}>
          <img src="/images/adjustments-horizontal.svg" alt="adjustment" />
          Filter
        </button>
        <button onClick={handleSortByClick}>
          Sort by
          <img src="/images/down-arrow.svg" alt="down-arrow" />
        </button>
      </FilterBox>
      {showPriceFilter && (
        <PriceFilter setShowPriceFilter={setShowPriceFilter} />
      )}
      {showSortBy && <SortBy />}
    </>
  );
}
