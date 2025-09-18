import { useRef, useState } from "react";
import type { InputProps } from "../../types";
import { InputCont } from "./inpur.styled";

export default function Input({ placeholder, icon }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [hideLabel, setHideLabel] = useState<boolean>(true);

  const handleLabelClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      setHideLabel(false);
    }
  };

  return (
    <InputCont>
      {hideLabel && (
        <label onClick={handleLabelClick} htmlFor={placeholder}>
          {placeholder} <span>*</span>
        </label>
      )}
      <input ref={inputRef} name={placeholder} type="text" />
      {icon && <img src="./images/eye.png" alt="eye" />}
    </InputCont>
  );
}
