import { Link, Outlet } from "react-router";
import { useSelector } from "react-redux";

import type { HeaderProps } from "./header.types";

import { selectAvatar } from "../../store/slices/AuthSlice/authSelector";

import {
  AvatarImg,
  CartImage,
  HeaderCont,
  LogoBox,
  RegisterBox,
} from "./header.styled";
import { useState } from "react";
import { createPortal } from "react-dom";
import CartModal from "../../modal/CartModal/CartModal";
import Overlay from "../../modal/Overlay/Overlay";

export default function Header({ text, url }: HeaderProps) {
  const avatar = useSelector(selectAvatar);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleCartClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const authorized = sessionStorage.getItem("token");

  console.log(avatar);

  return (
    <>
      <HeaderCont>
        <Link to="/?page=1">
          <LogoBox>
            <img src="/images/handEye.png" alt="hand eye " />
            <h1>RedSeam Clothing</h1>
          </LogoBox>
        </Link>
        <RegisterBox>
          <CartImage
            onClick={handleCartClick}
            src="/images/cart.svg"
            alt="cart"
          />
          {avatar && <AvatarImg src={avatar} alt="user" />}
          {url && !avatar && !authorized && <Link to={url}>{text}</Link>}
        </RegisterBox>
      </HeaderCont>
      {showModal && (
        <>
          {createPortal(<CartModal handleClose={handleClose} />, document.body)}
          <Overlay handleClose={handleClose} />
        </>
      )}
      <Outlet />
    </>
  );
}
