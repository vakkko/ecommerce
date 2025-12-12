import type { AuthContainerProps } from "../../types";
import Header from "../Header/Header";
import { MainContainer } from "./authContainer.styled";

export default function AuthContainer({
  text,
  child,
  url,
}: AuthContainerProps) {
  return (
    <>
      <Header url={url} text={text} />
      <MainContainer>
        <img src="/images/cover.png" alt="man and woman dressed classy" />
        {child}
      </MainContainer>
    </>
  );
}
