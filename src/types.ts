import type { BaseSyntheticEvent, ReactNode } from "react";

export interface HeaderProps {
  text: string;
  url: string;
}

export interface AuthContainerProps {
  child: ReactNode;
  text: string;
  url: string;
}

export interface ButtonProps {
  text: string;
  handleSubmit?: (e?: BaseSyntheticEvent<object> | undefined) => Promise<void>;
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
