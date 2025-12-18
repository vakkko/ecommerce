import type {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  Path,
  UseFormWatch,
} from "react-hook-form";

export interface InputProps<T extends FieldValues> {
  placeholder: string;
  icon?: boolean;
  label: Path<T>;
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
  watch: UseFormWatch<T>;
}
