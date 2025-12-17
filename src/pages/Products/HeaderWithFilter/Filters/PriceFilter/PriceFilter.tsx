import { useForm } from "react-hook-form";
import Input from "../../../../../components/Input/Input";
import Button from "../../../../../components/Button/Button";
import { InputError, PriceFilterBox } from "./priceFilter.styled";
import { filterByPriceSchema } from "../../../../../validations/schemas/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import type { HeaderWithFilterProps } from "../../headerWithFilter.types";
import { ErrMsg } from "../../../../../components/Input/inpur.styled";
import { useEffect, useState } from "react";
import type { PriceFilter } from "../../../products.types";

export default function PriceFilter({
  setFilterByPrice,
}: Pick<HeaderWithFilterProps, "setFilterByPrice">) {
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(filterByPriceSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data: PriceFilter) => {
    setFilterByPrice(data);
  };

  useEffect(() => {
    const messages: string[] = [];

    Object.values(errors).forEach((err) => {
      if (!err) return;
      if ("message" in err && "type" in err && err.message) {
        if (err.message === "this is invalid") {
          messages.push(String(err.type));
        } else {
          messages.push(err.message);
        }
      }
    });
    setErrorMessages(messages);
  }, [errors]);

  return (
    <PriceFilterBox>
      <h4>Select price</h4>
      <InputError>
        <div>
          <Input label="from" placeholder="From" register={register} />
          <Input label="to" placeholder="To" register={register} />
        </div>
        {errorMessages && errorMessages.map((err) => <ErrMsg>{err}</ErrMsg>)}
      </InputError>
      <Button handleSubmit={handleSubmit(onSubmit)} text="Apply" />
    </PriceFilterBox>
  );
}
