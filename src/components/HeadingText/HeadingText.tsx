import type { HeaderProps } from "../../types";
import { Heading } from "./headingText.styled";

export default function HeadingText({ text }: HeaderProps) {
  return <Heading>{text}</Heading>;
}
