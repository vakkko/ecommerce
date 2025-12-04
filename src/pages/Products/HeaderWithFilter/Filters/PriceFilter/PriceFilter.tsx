import { useForm } from "react-hook-form";
import Input from "../../../../../components/Input/Input";
import Button from "../../../../../components/Button/Button";
import { PriceFilterBox } from "./priceFilter.styled";

export default function PriceFilter() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <PriceFilterBox>
      <h4>Select price</h4>
      <div>
        <Input label="from" placeholder="From" register={register} />
        <Input label="from" placeholder="To" register={register} />
      </div>
      <Button text="Appy" />
    </PriceFilterBox>
  );
}
