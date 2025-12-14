import { Link } from "react-router";
import { useSelector } from "react-redux";

import type { HeaderProps } from "./header.types";

import { selectAvatar } from "../../store/selectores/authSelector";

import { AvatarImg, HeaderCont, LogoBox, RegisterBox } from "./header.styled";

export default function Header({ text, url, productsPage }: HeaderProps) {
  const avatar = useSelector(selectAvatar);
  return (
    <HeaderCont>
      <LogoBox>
        <img src="/images/handEye.png" alt="hand eye " />
        <h1>RedSeam Clothing</h1>
      </LogoBox>
      <RegisterBox>
        {productsPage ? (
          <>
            <img src="/images/cart.svg" alt="cart" />
            {avatar && <AvatarImg src={avatar} alt="user" />}
          </>
        ) : (
          <>
            <img src="/images/user-icon.png" alt="user" />
            {url && <Link to={url}>{text}</Link>}
          </>
        )}
      </RegisterBox>
    </HeaderCont>
  );
}
