import type { UseFormSetValue } from "react-hook-form";

export interface QuantityProps {
  setValue: UseFormSetValue<{ color: string; size: string; quantity: number }>;
  selectedQuantity: number;
}
