import type { InputProps } from "../../types";
import { InputCont } from "./inpur.styled";

export default function Input({ placeholder, icon }: InputProps) {
  return (
    <InputCont>
      <label htmlFor={placeholder}>
        {placeholder} <span>*</span>
      </label>
      <input name={placeholder} type="text" />
      {icon && <img src="./images/eye.png" alt="eye" />}
    </InputCont>
  );
}
