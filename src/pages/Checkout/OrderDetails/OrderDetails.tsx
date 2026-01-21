import { useForm } from "react-hook-form";

import Input from "../../../components/Input/Input";

import { DetailsContainer } from "./orderDetails.styled";

export default function OrderDetails() {
  const email = sessionStorage.getItem("email");

  const { register, watch } = useForm({
    defaultValues: {
      name: undefined,
      surname: undefined,
      email,
      address: undefined,
      zipcode: undefined,
    },
  });

  return (
    <DetailsContainer>
      <h2>Order details</h2>
      <div>
        <Input
          placeholder="Name"
          label="name"
          register={register}
          watch={watch}
        />
        <Input
          placeholder="Surname"
          label="surname"
          register={register}
          watch={watch}
        />
        <Input
          placeholder="Email"
          label="email"
          register={register}
          watch={watch}
          fullWidth
        />
        <Input
          placeholder="Address"
          label="address"
          register={register}
          watch={watch}
        />
        <Input
          placeholder="Zip code"
          label="zipcode"
          register={register}
          watch={watch}
        />
      </div>
    </DetailsContainer>
  );
}
