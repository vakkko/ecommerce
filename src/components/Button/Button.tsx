import type { ButtonProps } from "../../types";
import { StyledButton } from "./button.styled";

export default function Button({ text }: ButtonProps) {
  return <StyledButton>{text}</StyledButton>;
}
