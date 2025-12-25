import type { Product } from "../../../store/services/productApi/productApi.types";
import Colors from "./Colors/Colors";
import { ProductDetailsContainer } from "./productDetails.styled";
import Quantity from "./Quantity/Quantity";
import Sizes from "./Sizes/Sizes";
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
        <Sizes sizes={data?.available_sizes} />
        <Quantity />
      </div>
    </ProductDetailsContainer>
  );
}
