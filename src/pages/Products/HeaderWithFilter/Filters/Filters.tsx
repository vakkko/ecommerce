import { useState } from "react";
import { FilterBox } from "./filter.styled";
import PriceFilter from "./PriceFilter/PriceFilter";
import SortBy from "./SortBy/SortBy";
import type { HeaderWithFilterProps } from "../headerWithFilter.types";

export default function Filters({
  setFilterByPrice,
}: Pick<HeaderWithFilterProps, "setFilterByPrice">) {
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
      {showPriceFilter && <PriceFilter setFilterByPrice={setFilterByPrice} />}
      {showSortBy && <SortBy />}
    </>
  );
}
