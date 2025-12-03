import type { RegisterFormData } from "../../Register/RegisterBox/registerBox.types";

export type LoginFormData = Pick<RegisterFormData, "email" | "password">;

export interface LoginErr {
  status: number;
  data: { message: string };
}
