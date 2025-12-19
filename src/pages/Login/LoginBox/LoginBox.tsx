import { useForm } from "react-hook-form";
import Button from "../../../components/Button/Button";
import HeadingText from "../../../components/HeadingText/HeadingText";
import InfoText from "../../../components/InfoText/InfoText";
import Input from "../../../components/Input/Input";
import { ButtonBox, LoginCont } from "./loginBox.styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../validations/schemas/schemas";
import type { LoginFormData } from "./loginBox.types";
import { ErrMsg } from "../../../components/Input/inpur.styled";
import useLogin from "../../../hooks/useLogin";

export default function LoginBox() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: yupResolver(loginSchema) });
  const { loginError, onSubmit } = useLogin();

  return (
    <LoginCont>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HeadingText text="Log in" />
        <Input
          errors={errors}
          register={register}
          label="email"
          placeholder="Email"
          watch={watch}
        />
        <Input
          errors={errors}
          register={register}
          label="password"
          placeholder="Password"
          icon
          watch={watch}
        />
        {loginError && <ErrMsg>{loginError}</ErrMsg>}
      </form>
      <ButtonBox>
        <Button type="submit" text={"Log in"} />
        <InfoText url="/register" text="Not a member?" link="Register" />
      </ButtonBox>
    </LoginCont>
  );
}
