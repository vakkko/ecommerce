import { useForm } from "react-hook-form";
import Button from "../../../components/Button/Button";
import HeadingText from "../../../components/HeadingText/HeadingText";
import InfoText from "../../../components/InfoText/InfoText";
import Input from "../../../components/Input/Input";
import { ButtonBox, LoginCont } from "./loginBox.styled";

export default function LoginBox() {
  const { register, watch, handleSubmit } = useForm();

  return (
    <LoginCont>
      <HeadingText text="Log in" />
      <Input register={register} label="email" placeholder="Email" />
      <Input register={register} label="password" placeholder="Password" icon />
      <ButtonBox>
        <Button text={"Log in"} />
        <InfoText url="/register" text="Not a member?" link="Register" />
      </ButtonBox>
    </LoginCont>
  );
}
