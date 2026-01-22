import type {
  FieldErrors,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import type { FormValues } from "../checkout.types";

export interface OrderDetailsProps {
  register: UseFormRegister<FormValues>;
  watch: UseFormWatch<FormValues>;
  errors?: FieldErrors<FormValues>;
}
