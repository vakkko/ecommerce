import type { BaseSyntheticEvent, ReactNode } from "react";

export interface ButtonProps {
  children: string | ReactNode;
  handleSubmit?: (
    e?: BaseSyntheticEvent<object> | undefined
  ) => Promise<void> | void;
  type?: "button" | "submit";
}
