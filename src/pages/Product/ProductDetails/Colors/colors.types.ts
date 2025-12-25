import type { UseFormSetValue } from "react-hook-form";
import type { InputValues } from "../productDetails.types";

export interface ColorProps {
  colors?: string[];
  setValue: UseFormSetValue<InputValues>;
}
