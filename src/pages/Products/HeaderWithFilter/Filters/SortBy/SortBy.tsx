import { SortBYBox } from "./sortBy.styled";

export default function SortBy() {
  return (
    <SortBYBox>
      <h4>Sort by</h4>
      <button>New products first</button>
      <button>Price, low to high</button>
      <button>Price, high to low</button>
    </SortBYBox>
  );
}
