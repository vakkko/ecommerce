import Button from "../../../components/Button/Button";
import HeadingText from "../../../components/HeadingText/HeadingText";
import InfoText from "../../../components/InfoText/InfoText";
import Input from "../../../components/Input/Input";
import { ButtonBox, LoginCont } from "./loginBox.styled";

export default function LoginBox() {
  return (
    <LoginCont>
      <HeadingText text="Log in" />
      <Input placeholder="Email or username" />
      <Input placeholder="Password" icon />
      <ButtonBox>
        <Button text={"Log in"} />
        <InfoText url="/register" text="Not a member?" link="Register" />
      </ButtonBox>
    </LoginCont>
  );
}
