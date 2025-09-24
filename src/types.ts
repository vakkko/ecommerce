import type { BaseSyntheticEvent, ReactNode } from "react";
import type {
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

export interface HeaderProps {
  text: string;
  url: string;
}

export interface AuthContainerProps {
  child: ReactNode;
  text: string;
  url: string;
}

export interface InputProps {
  placeholder: string;
  icon?: boolean;
  label: string;
  register: UseFormRegister<FieldValues>;
  validate?: {
    required?: boolean | string;
    pattern?: {
      value: RegExp;
      message: string;
    };
    minLength?: { value: number; message: string };
    validate?: (value: string) => true | string;
  };
  errors?: FieldErrors<FieldValues>;
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
