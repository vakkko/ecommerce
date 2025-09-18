import { useRef, useState } from "react";
import type { InputProps } from "../../types";
import { InputCont } from "./inpur.styled";

export default function Input({ placeholder, icon }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showLabel, setShowLabel] = useState<boolean>(true);

  const handleLabelClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      setShowLabel(false);
    }
  };

  const handleInputClick = () => {
    setShowLabel(false);
  };

  return (
    <InputCont>
      {showLabel && (
        <label onClick={handleLabelClick} htmlFor={placeholder}>
          {placeholder} <span>*</span>
        </label>
      )}
      <input
        onClick={handleInputClick}
        ref={inputRef}
        name={placeholder}
        type="text"
      />
      {icon && <img src="./images/eye.png" alt="eye" />}
    </InputCont>
  );
}
