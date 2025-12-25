import type { ButtonProps } from "./button.types";
import { StyledButton } from "./button.styled";

export default function Button({ children, handleSubmit, type }: ButtonProps) {
  return (
    <StyledButton type={type} onClick={handleSubmit}>
      {children}
    </StyledButton>
  );
}
