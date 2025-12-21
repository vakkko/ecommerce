import { useParams } from "react-router";
import { useGetProductByIdQuery } from "../../store/services/productApi/productApi";
import ProductImages from "./ProductImages/ProductImages";
import { ProductContainer } from "./product.styled";

export default function Product() {
  const id = Number(useParams().id);
  const { data } = useGetProductByIdQuery(id);

  return (
    <ProductContainer>
      <ProductImages
        images={{
          cover_image: data?.cover_image,
          otherImages: data?.images,
          description: data?.description,
        }}
      />
    </ProductContainer>
  );
}
