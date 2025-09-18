import Button from "../../../components/Button/Button";
import HeadingText from "../../../components/HeadingText/HeadingText";
import InfoText from "../../../components/InfoText/InfoText";
import Input from "../../../components/Input/Input";
import { ButtonBox } from "../../Login/LoginBox/loginBox.styled";
import {
  Circle,
  ImageUpload,
  InfoBox,
  RegisterCont,
  UploadText,
} from "./registerBox.styled";

function RegisterBox() {
  return (
    <RegisterCont>
      <HeadingText text="Registration" />
      <InfoBox>
        <ImageUpload>
          <Circle>
            <img src="./images/camera.png" alt="camera" />
          </Circle>
          <UploadText>
            <label>
              Upload image
              <input type="file" />
            </label>
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
