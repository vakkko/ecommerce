import { SortButton, SortBYBox } from "./sortBy.styled";
import { useSearchParams } from "react-router";

export default function SortBy() {
  const [searchParams, setSearchParams] = useSearchParams();

  const setSort = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", value);
    params.set("page", "1");
    setSearchParams(params);
  };

  const sortValue = searchParams.get("sort");

  return (
    <SortBYBox>
      <h4>Sort by</h4>
      <SortButton
        $active={sortValue === "created_at"}
        onClick={() => setSort("created_at")}
      >
        New products first
      </SortButton>
      <SortButton
        $active={sortValue === "price"}
        onClick={() => setSort("price")}
      >
        Price, low to high
      </SortButton>
      <SortButton
        $active={sortValue === "-price"}
        onClick={() => setSort("-price")}
      >
        Price, high to low
      </SortButton>
    </SortBYBox>
  );
}
