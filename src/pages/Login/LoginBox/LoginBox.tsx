import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import Button from "../../../components/Button/Button";
import HeadingText from "../../../components/HeadingText/HeadingText";
import InfoText from "../../../components/InfoText/InfoText";
import Input from "../../../components/Input/Input";
import { ButtonBox, LoginCont } from "./loginBox.styled";
import { useNavigate } from "react-router";

export default function LoginBox() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
        validate={{
          required: "Email is required",
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
            message: "Please enter a valid email address",
          },
        }}
        register={register}
        label="email"
        placeholder="Email"
      />
      <Input
        errors={errors}
        validate={{
          required: "Password is required",
          pattern: {
            value: /^\S{3,}$/,
            message: "Password cannot contain spaces",
          },
          minLength: {
            value: 3,
            message: "Password should be more than 3 characters",
          },
        }}
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
