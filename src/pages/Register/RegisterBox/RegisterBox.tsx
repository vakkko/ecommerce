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

function RegisterBox() {
  const [avatar, setAvatar] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");

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
        <Input placeholder="Username" />
        <Input placeholder="Email" />
        <Input placeholder="Password" icon />
        <Input placeholder="Confirm password" icon />
        <ButtonBox>
          <Button text="Register" />
          <InfoText url="/login" text="Alredy member?" link="Log in" />
        </ButtonBox>
      </InfoBox>
    </RegisterCont>
  );
}

export default RegisterBox;
