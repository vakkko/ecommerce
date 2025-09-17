import { Link } from "react-router";
import type { HeaderProps } from "../../types";
import { HeaderCont, LogoBox, RegisterBox } from "./header.styled";

export default function Header({ text }: HeaderProps) {
  return (
    <HeaderCont>
      <LogoBox>
        <img src="./images/handEye.png" alt="hand eye " />
        <h1>RedSeam Clothing</h1>
      </LogoBox>
      <RegisterBox>
        <img src="./images/user-icon.png" alt="user" />
        <Link to={"register"}>{text}</Link>
      </RegisterBox>
    </HeaderCont>
  );
}
