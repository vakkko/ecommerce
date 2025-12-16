import { useForm } from "react-hook-form";
import Input from "../../../../../components/Input/Input";
import Button from "../../../../../components/Button/Button";
import { PriceFilterBox } from "./priceFilter.styled";
import { filterByPriceSchema } from "../../../../../validations/schemas/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import type { HeaderWithFilterProps } from "../../headerWithFilter.types";

export default function PriceFilter({
  setFilterByPrice,
}: Pick<HeaderWithFilterProps, "setFilterByPrice">) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(filterByPriceSchema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    setFilterByPrice(data);
  };

  return (
    <PriceFilterBox>
      <h4>Select price</h4>
      <div>
        <Input label="from" placeholder="From" register={register} />
        <Input label="to" placeholder="To" register={register} />
      </div>
      <Button handleSubmit={handleSubmit(onSubmit)} text="Apply" />
    </PriceFilterBox>
  );
}
