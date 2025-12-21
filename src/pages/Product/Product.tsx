import { useParams } from "react-router";
import { useGetProductsQuery } from "../../store/services/productApi/productApi";

export default function Product() {
  const id = Number(useParams().id);
  const data = useGetProductsQuery({ id });

  return <div>Product</div>;
}
