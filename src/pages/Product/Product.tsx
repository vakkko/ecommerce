import { useParams } from "react-router";
import { useGetProductByIdQuery } from "../../store/services/productApi/productApi";
import ProductImages from "./ProductImages/ProductImages";
import { ProductContainer } from "./product.styled";
import ProductDetails from "./ProductDetails/ProductDetails";

export default function Product() {
  const id = Number(useParams().id);
  const { data } = useGetProductByIdQuery(id);

  const description = data?.description;

  return (
    <ProductContainer>
      <h4>Listing / Product</h4>
      <div>
        <ProductImages images={data?.images} description={description} />
        <ProductDetails data={data} />
      </div>
    </ProductContainer>
  );
}
