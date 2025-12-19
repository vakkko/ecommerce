import type { BaseSyntheticEvent, ReactNode } from "react";

export interface AuthContainerProps {
  child: ReactNode;
  text: string;
  url: string;
}

export interface ButtonProps {
  text: string;
  handleSubmit?: (e?: BaseSyntheticEvent<object> | undefined) => Promise<void>;
  type?: "button" | "submit";
}

export interface InfoTextProps {
  text: string;
  link: string;
  url: string;
}

export type RegisterType = {
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
};
