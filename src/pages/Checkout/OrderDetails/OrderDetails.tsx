import Input from "../../../components/Input/Input";

import { useFormContext } from "react-hook-form";

import { DetailsContainer } from "./orderDetails.styled";

export default function OrderDetails() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  return (
    <DetailsContainer>
      <h2>Order details</h2>
      <form>
        <Input
          placeholder="Name"
          label="name"
          register={register}
          watch={watch}
          errors={errors}
        />
        <Input
          placeholder="Surname"
          label="surname"
          register={register}
          watch={watch}
          errors={errors}
        />
        <Input
          placeholder="Email"
          label="email"
          register={register}
          watch={watch}
          fullWidth
          errors={errors}
        />
        <Input
          placeholder="Address"
          label="address"
          register={register}
          watch={watch}
          errors={errors}
        />
        <Input
          placeholder="Zip code"
          label="zip_code"
          register={register}
          watch={watch}
          errors={errors}
        />
      </form>
    </DetailsContainer>
  );
}
