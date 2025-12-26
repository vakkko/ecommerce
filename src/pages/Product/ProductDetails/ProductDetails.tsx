import { useForm, type SubmitHandler } from "react-hook-form";

import Button from "../../../components/Button/Button";
import Colors from "./Colors/Colors";
import Quantity from "./Quantity/Quantity";
import Sizes from "./Sizes/Sizes";
import TitlePrice from "./TitlePrice/TitlePrice";
import Details from "./Details/Details";

import { useParams } from "react-router";

import { useAddToCartMutation } from "../../../store/services/cartApi";

import { yupResolver } from "@hookform/resolvers/yup";

import { ProductDetailsSchema } from "../../../validations/schemas/schemas";

import type { InputValues } from "./productDetails.types";
import type { ProductDetailsProps } from "./productDetails.types";

import {
  HorizontalLine,
  ProductDetailsContainer,
} from "./productDetails.styled";

export default function ProductDetails({ data }: ProductDetailsProps) {
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<InputValues>({
    resolver: yupResolver(ProductDetailsSchema),
    defaultValues: {
      quantity: 1,
    },
  });

  const { id } = useParams();

  const [addCart] = useAddToCartMutation();

  const selectedSize = watch("size");
  const selectedQuantity = watch("quantity");

  const onSubmit: SubmitHandler<InputValues> = (data) => {
    addCart({ id, ...data });
  };

  console.log(data);

  return (
    <ProductDetailsContainer>
      <TitlePrice namePrice={{ name: data?.name, price: data?.price }} />
      <div>
        <Colors setValue={setValue} colors={data?.available_colors} />
        <Sizes
          setValue={setValue}
          sizes={data?.available_sizes}
          selectedSize={selectedSize}
          sizeError={errors.size?.message}
        />
        <Quantity setValue={setValue} selectedQuantity={selectedQuantity} />
      </div>
      <Button type="submit" handleSubmit={handleSubmit(onSubmit)}>
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.75 0.75H2.13568C2.64537 0.75 3.09138 1.09265 3.2227 1.58513L3.6059 3.02209M6 12C4.34315 12 3 13.3431 3 15H18.75M6 12H17.2183C18.3394 9.69936 19.3177 7.31635 20.1417 4.8625C15.38 3.64646 10.3905 3 5.25 3C4.70021 3 4.15214 3.0074 3.6059 3.02209M6 12L3.6059 3.02209M4.5 18C4.5 18.4142 4.16421 18.75 3.75 18.75C3.33579 18.75 3 18.4142 3 18C3 17.5858 3.33579 17.25 3.75 17.25C4.16421 17.25 4.5 17.5858 4.5 18ZM17.25 18C17.25 18.4142 16.9142 18.75 16.5 18.75C16.0858 18.75 15.75 18.4142 15.75 18C15.75 17.5858 16.0858 17.25 16.5 17.25C16.9142 17.25 17.25 17.5858 17.25 18Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Add to cart
      </Button>
      <HorizontalLine />
      <Details data={{ brand: data?.brand, description: data?.description }} />
    </ProductDetailsContainer>
  );
}
