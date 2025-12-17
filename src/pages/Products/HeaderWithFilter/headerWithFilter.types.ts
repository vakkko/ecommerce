import type { Dispatch, SetStateAction } from "react";
import type { PriceFilter } from "../products.types";

export interface HeaderWithFilterProps {
  from: number | undefined;
  to: number | undefined;
  total: number | undefined;
  setFilterByPrice: Dispatch<SetStateAction<PriceFilter>>;
}
