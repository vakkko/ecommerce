import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import Button from "../../../components/Button/Button";
import HeadingText from "../../../components/HeadingText/HeadingText";
import InfoText from "../../../components/InfoText/InfoText";
import Input from "../../../components/Input/Input";
import { ButtonBox, LoginCont } from "./loginBox.styled";
import { useNavigate } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../validations/schemas/schemas";
import type { LoginFormData } from "./loginBox.types";

export default function LoginBox() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: yupResolver(loginSchema) });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data): Promise<void> => {
    const formData = new FormData();
    if (data) {
      formData.append("email", data.email);
      formData.append("password", data.password);
    }

    try {
      const response = await fetch(
        "https://api.redseam.redberryinternship.ge/api/login",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      const result = await response.json();

      if (response.ok) {
        navigate("/products");
      } else {
        alert(result.message);
        throw new Error("Invalid username or password");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <LoginCont>
      <HeadingText text="Log in" />
      <Input
        errors={errors}
        register={register}
        label="email"
        placeholder="Email"
      />
      <Input
        errors={errors}
        register={register}
        label="password"
        placeholder="Password"
        icon
      />

      <ButtonBox>
        <Button handleSubmit={handleSubmit(onSubmit)} text={"Log in"} />
        <InfoText url="/register" text="Not a member?" link="Register" />
      </ButtonBox>
    </LoginCont>
  );
}
