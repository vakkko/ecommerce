import type { Product } from "../../../store/services/productApi/productApi.types";
import TitlePrice from "./TitlePrice/TitlePrice";

export default function ProductDetails({
  data,
}: {
  data: Product | undefined;
}) {
  return (
    <div>
      <TitlePrice namePrice={{ name: data?.name, price: data?.price }} />
    </div>
  );
}
