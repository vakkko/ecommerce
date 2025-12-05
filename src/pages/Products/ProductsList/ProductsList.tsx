import { useGetProductsQuery } from "../../../app/services/productApi/productApi";

export default function ProductsList() {
  const { data } = useGetProductsQuery();

  console.log(data);
  return <div>ProductsList</div>;
}
