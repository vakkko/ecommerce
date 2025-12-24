import type { Product } from "../../../store/services/productApi/productApi.types";
import Colors from "./Colors/Colors";
import { ProductDetailsContainer } from "./productDetails.styled";
import TitlePrice from "./TitlePrice/TitlePrice";

export default function ProductDetails({
  data,
}: {
  data: Product | undefined;
}) {
  return (
    <ProductDetailsContainer>
      <TitlePrice namePrice={{ name: data?.name, price: data?.price }} />
      <div>
        <Colors colors={data?.available_colors} />
      </div>
    </ProductDetailsContainer>
  );
}
