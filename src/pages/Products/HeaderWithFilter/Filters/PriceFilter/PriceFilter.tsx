import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSearchParams } from "react-router";

import Input from "../../../../../components/Input/Input";
import Button from "../../../../../components/Button/Button";

import type { PriceFilterProps } from "./priceFilter.types";
import type { Maybe } from "yup";

import { filterByPriceSchema } from "../../../../../validations/schemas/schemas";

import { ErrMsg } from "../../../../../components/Input/inpur.styled";
import { InputError, PriceFilterBox } from "./priceFilter.styled";

export default function PriceFilter({ setShowPriceFilter }: PriceFilterProps) {
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(filterByPriceSchema),
    mode: "onSubmit",
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const onSubmit = (data: { from?: Maybe<number>; to?: Maybe<number> }) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (data.from != null) params.set("from", String(data.from));
    else params.delete("from");

    if (data.to != null) params.set("to", String(data.to));
    else params.delete("to");

    setSearchParams(params);

    if (Object.keys(errors).length === 0) {
      setShowPriceFilter(false);
    }
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

  useEffect(() => {
    const from = searchParams.get("from");
    const to = searchParams.get("to");

    if (from) setValue("from", Number(from));
    else setValue("from", undefined);

    if (to) setValue("to", Number(to));
    else setValue("to", undefined);
  }, [searchParams, setValue]);

  return (
    <PriceFilterBox>
      <h4>Select price</h4>
      <InputError>
        <div>
          <Input
            label="from"
            placeholder="From"
            register={register}
            watch={watch}
          />
          <Input
            label="to"
            placeholder="To"
            register={register}
            watch={watch}
          />
        </div>
        {errorMessages &&
          errorMessages.map((err) => <ErrMsg key={err}>{err}</ErrMsg>)}
      </InputError>
      <Button handleSubmit={handleSubmit(onSubmit)} children="Apply" />
    </PriceFilterBox>
  );
}
