import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import HeadingText from "../../../components/HeadingText/HeadingText";
import InfoText from "../../../components/InfoText/InfoText";
import Input from "../../../components/Input/Input";
import { ButtonBox } from "../../Login/LoginBox/loginBox.styled";
import { InfoBox, RegisterCont } from "./registerBox.styled";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import ImageUpload from "./ImageUpload/ImageUpload";

function RegisterBox() {
  const [avatar, setAvatar] = useState<File | null>(null);
  const [responseMsg, setResponseMsg] = useState<string[] | undefined>();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ mode: "onChange" });

  const navigate = useNavigate();

  const password = watch("password");

  const onSubmit: SubmitHandler<FieldValues> = async (data): Promise<void> => {
    const formData = new FormData();

    if (data) {
      formData.append("email", data.email);
      formData.append("username", data.username);
      formData.append("password", data.password);
      formData.append("password_confirmation", data.confirmpassword);

      if (avatar) {
        formData.append("avatar", avatar);
      }

      try {
        const response = await fetch(
          "https://api.redseam.redberryinternship.ge/api/register",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
            },
            body: formData,
          }
        );

        const result = await response.json();

        if (response.ok && result.token) {
          localStorage.setItem("token", result.token);
          navigate("/login");
        } else {
          const errorsArr: string[] = Object.values(result.errors || {});
          setResponseMsg(errorsArr);
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <RegisterCont>
      <HeadingText text="Registration" />
      <InfoBox>
        <ImageUpload setAvatar={setAvatar} />
        <Input
          validate={{
            required: "Invalid Username input",
            pattern: {
              value: /^[A-Za-z0-9!@#$%^&*._-]+$/,
              message:
                "Username can only contain letters, numbers, and special characters",
            },
          }}
          register={register}
          label="username"
          placeholder="Username"
          errors={errors}
        />
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
        <Input
          errors={errors}
          validate={{
            required: "Confirm password is required",
            validate: (value: string) => {
              if (value !== password) {
                return "Passwords do not match";
              }
              return true;
            },
          }}
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
