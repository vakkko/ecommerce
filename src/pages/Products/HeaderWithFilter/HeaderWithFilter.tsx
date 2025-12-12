import Filters from "./Filters/Filters";

import { HeaderWithFilterContainer } from "./headerWithFilter.styled";

export default function HeaderWithFilter() {
  return (
    <HeaderWithFilterContainer>
      <h1>Products</h1>
      <div>
        <p>Showing 1-10 of 100 results</p>
        <img src="/images/small-stick.svg" alt="small vertical line" />
        <Filters />
      </div>
    </HeaderWithFilterContainer>
  );
}
