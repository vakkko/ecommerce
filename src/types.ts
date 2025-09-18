import type { ReactNode } from "react";

export interface HeaderProps {
  text: string;
}

export interface AuthContainerProps extends HeaderProps {
  child: ReactNode;
}

export interface InputProps {
  placeholder: string;
  icon?: boolean;
}

export interface ButtonProps {
  text: string;
}

export interface InfoTextProps {
  text: string;
  link: string;
  url: string;
}
