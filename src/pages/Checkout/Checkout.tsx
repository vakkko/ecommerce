import CartModal from "../../modal/CartModal/CartModal";
import OrderDetails from "./OrderDetails/OrderDetails";

import { Heading } from "../../components/HeadingText/headingText.styled";

import { CheckoutContainer } from "./checkout.styled";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { orderDetailsSchema } from "../../validations/schemas/schemas";
import type { FormValues } from "./checkout.types";

export default function Checkout() {
  const email = sessionStorage.getItem("email") ?? undefined;
  const methods = useForm<FormValues>({
    resolver: yupResolver(orderDetailsSchema),
    defaultValues: {
      email,
    },
  });

  return (
    <FormProvider {...methods}>
      <CheckoutContainer>
        <Heading>Checkout</Heading>
        <div>
          <OrderDetails />
          <CartModal checkout />
        </div>
      </CheckoutContainer>
    </FormProvider>
  );
}
