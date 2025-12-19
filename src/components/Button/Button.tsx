import type { ButtonProps } from "../../types";
import { StyledButton } from "./button.styled";

export default function Button({ text, handleSubmit, type }: ButtonProps) {
  return (
    <StyledButton type={type} onClick={handleSubmit}>
      {text}
    </StyledButton>
  );
}
