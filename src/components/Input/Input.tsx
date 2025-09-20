import { useRef, useState } from "react";
import type { InputProps } from "../../types";
import { ErrMsg, InputCont } from "./inpur.styled";

export default function Input({
  placeholder,
  icon,
  label,
  register,
  validate,
  errors,
}: InputProps) {
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

  const fieldError = errors && errors[label];
  const errorMessage = fieldError?.message ? fieldError.message : undefined;

  return (
    <InputCont>
      {showLabel && (
        <label onClick={handleLabelClick} htmlFor={placeholder}>
          {placeholder} <span>*</span>
        </label>
      )}
      <input
        onClick={handleInputClick}
        {...register(label, validate)}
        ref={(el) => {
          inputRef.current = el;
          register(label).ref(el);
        }}
      />
      {icon && <img src="./images/eye.png" alt="eye" />}
      {typeof errorMessage === "string" ? (
        <ErrMsg>{errorMessage}</ErrMsg>
      ) : (
        <p></p>
      )}
    </InputCont>
  );
}
