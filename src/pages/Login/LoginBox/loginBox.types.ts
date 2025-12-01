import type { RegisterFormData } from "../../Register/RegisterBox/registerBox.types";

export type LoginFormData = Pick<RegisterFormData, "email" | "password">;
