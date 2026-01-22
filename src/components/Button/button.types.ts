import type { BaseSyntheticEvent, ReactNode } from "react";
import type { FieldValues, SubmitHandler } from "react-hook-form";

export interface ButtonProps {
  children: string | ReactNode;
  handleSubmit?: (
    e?: BaseSyntheticEvent<object> | undefined,
  ) => Promise<void> | void | SubmitHandler<FieldValues>;
  type?: "button" | "submit";
}
