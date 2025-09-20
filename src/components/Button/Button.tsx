import type { ButtonProps } from "../../types";
import { StyledButton } from "./button.styled";

export default function Button({ text, handleSubmit }: ButtonProps) {
  return <StyledButton onClick={handleSubmit}>{text}</StyledButton>;
}
