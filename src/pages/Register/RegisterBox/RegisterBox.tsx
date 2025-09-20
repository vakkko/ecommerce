import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import HeadingText from "../../../components/HeadingText/HeadingText";
import InfoText from "../../../components/InfoText/InfoText";
import Input from "../../../components/Input/Input";
import { ButtonBox } from "../../Login/LoginBox/loginBox.styled";
import {
  Avatar,
  Circle,
  ImageUpload,
  InfoBox,
  RegisterCont,
  UploadText,
} from "./registerBox.styled";
import { useForm } from "react-hook-form";

function RegisterBox() {
  const [avatar, setAvatar] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAvatar(file);

      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  };

  const handleRemoveClick = () => {
    setPreview("");
  };

  const password = watch("password");

  const onSubmit = (data) => {
    console.log("Valid data", data);
  };

  return (
    <RegisterCont>
      <HeadingText text="Registration" />
      <InfoBox>
        <ImageUpload>
          <Circle>
            {!preview ? (
              <img src="./images/camera.png" alt="camera" />
            ) : (
              <Avatar src={preview} alt="avatar" />
            )}
          </Circle>
          <UploadText>
            <label>
              Upload {preview ? "new" : "image"}
              <input onChange={handleFileChange} type="file" />
            </label>
            {preview && <button onClick={handleRemoveClick}>Remove</button>}
          </UploadText>
        </ImageUpload>
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
        <ButtonBox>
          <Button handleSubmit={handleSubmit(onSubmit)} text="Register" />
          <InfoText url="/login" text="Already member?" link="Log in" />
        </ButtonBox>
      </InfoBox>
    </RegisterCont>
  );
}

export default RegisterBox;
