import type { ReactNode } from "react";

export interface AuthContainerProps {
  child: ReactNode;
  text: string;
  url: string;
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
