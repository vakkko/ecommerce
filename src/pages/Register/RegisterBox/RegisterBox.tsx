import { useForm } from "react-hook-form";

import Button from "../../../components/Button/Button";
import HeadingText from "../../../components/HeadingText/HeadingText";
import InfoText from "../../../components/InfoText/InfoText";
import Input from "../../../components/Input/Input";
import ImageUpload from "./ImageUpload/ImageUpload";
import { ErrMsg } from "../../../components/Input/inpur.styled";

import { registerSchema } from "../../../validations/schemas/schemas";
import { yupResolver } from "@hookform/resolvers/yup";

import useRegister from "../../../hooks/useRegister";

import type { RegisterFormData } from "./registerBox.types";

import { ButtonBox } from "../../Login/LoginBox/loginBox.styled";
import { RegisterForm, RegisterCont } from "./registerBox.styled";

function RegisterBox() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });

  const { onSubmit, setAvatar, responseMsg } = useRegister();

  return (
    <RegisterCont>
      <HeadingText text="Registration" />
      <RegisterForm onSubmit={handleSubmit(onSubmit)}>
        <ImageUpload setAvatar={setAvatar} />
        <Input
          register={register}
          label="username"
          placeholder="Username"
          errors={errors}
          watch={watch}
        />
        <Input
          errors={errors}
          register={register}
          label="email"
          placeholder="Email"
          watch={watch}
          autocomplete="email"
        />
        <Input
          errors={errors}
          register={register}
          label="password"
          placeholder="Password"
          icon
          watch={watch}
          autocomplete="new-password"
        />
        <Input
          errors={errors}
          register={register}
          label="confirmpassword"
          placeholder="Confirm password"
          icon
          watch={watch}
          autocomplete="new-password"
        />
        {responseMsg &&
          responseMsg.map((err, i) => <ErrMsg key={i}>{err}</ErrMsg>)}
        <ButtonBox>
          <Button type="submit" children="Register" />
          <InfoText url="/login" text="Already member?" link="Log in" />
        </ButtonBox>
      </RegisterForm>
    </RegisterCont>
  );
}

export default RegisterBox;
