import type { Dispatch, SetStateAction } from "react";

export interface HeaderWithFilterProps {
  from: number | undefined;
  to: number | undefined;
  total: number | undefined;
  setFilterByPrice: Dispatch<
    SetStateAction<{
      from: string;
      to: string;
    }>
  >;
}
