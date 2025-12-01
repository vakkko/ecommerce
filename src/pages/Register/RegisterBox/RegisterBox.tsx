import Button from "../../../components/Button/Button";
import HeadingText from "../../../components/HeadingText/HeadingText";
import InfoText from "../../../components/InfoText/InfoText";
import Input from "../../../components/Input/Input";
import { ButtonBox } from "../../Login/LoginBox/loginBox.styled";
import ImageUpload from "./ImageUpload/ImageUpload";

import { InfoBox, RegisterCont } from "./registerBox.styled";

import { useForm } from "react-hook-form";

import { registerSchema } from "../../../validations/schemas/schemas";
import { yupResolver } from "@hookform/resolvers/yup";

import type { RegisterFormData } from "./registerBox.types";

import useRegister from "../../../hooks/useRegister";

function RegisterBox() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });

  const { onSubmit, setAvatar, responseMsg } = useRegister();

  return (
    <RegisterCont>
      <HeadingText text="Registration" />
      <InfoBox>
        <ImageUpload setAvatar={setAvatar} />
        <Input
          register={register}
          label="username"
          placeholder="Username"
          errors={errors}
        />
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
        <Input
          errors={errors}
          register={register}
          label="confirmpassword"
          placeholder="Confirm password"
          icon
        />
        {responseMsg &&
          responseMsg.map((err, i) => (
            <p key={i} style={{ color: "var(--red)" }}>
              {err}
            </p>
          ))}
        <ButtonBox>
          <Button handleSubmit={handleSubmit(onSubmit)} text="Register" />
          <InfoText url="/login" text="Already member?" link="Log in" />
        </ButtonBox>
      </InfoBox>
    </RegisterCont>
  );
}

export default RegisterBox;
