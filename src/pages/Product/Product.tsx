import { useParams } from "react-router";
import { useGetProductByIdQuery } from "../../store/services/productApi/productApi";
import ProductImages from "./ProductImages/ProductImages";
import { ProductContainer } from "./product.styled";

export default function Product() {
  const id = Number(useParams().id);
  const { data } = useGetProductByIdQuery(id);

  const images = [
    ...(data?.images.map((img) => ({
      image: img,
      spotlight: data?.cover_image === img ? true : false,
      id: crypto.randomUUID(),
    })) ?? []),
  ];
  const description = data?.description;

  return (
    <ProductContainer>
      <ProductImages images={images} description={description} />
    </ProductContainer>
  );
}
