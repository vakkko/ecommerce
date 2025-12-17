import Filters from "./Filters/Filters";

import { HeaderWithFilterContainer } from "./headerWithFilter.styled";
import type { HeaderWithFilterProps } from "./headerWithFilter.types";

export default function HeaderWithFilter({
  from,
  to,
  total,
}: HeaderWithFilterProps) {
  return (
    <HeaderWithFilterContainer>
      <h1>Products</h1>
      <div>
        <p>
          Showing {from}-{to} of {total} results
        </p>
        <img src="/images/small-stick.svg" alt="small vertical line" />
        <Filters />
      </div>
    </HeaderWithFilterContainer>
  );
}
