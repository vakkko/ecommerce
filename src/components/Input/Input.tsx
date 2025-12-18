import { useRef, useState } from "react";

import type { FieldValues } from "react-hook-form";

import type { InputProps } from "./input.types";

import { ErrMsg, EyeImg, InputCont } from "./inpur.styled";

export default function Input<T extends FieldValues>({
  placeholder,
  icon,
  label,
  register,
  errors,
  watch,
}: InputProps<T>) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState<string | undefined>(() =>
    icon ? "password" : undefined
  );

  const handleLabelClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleEyeClick = () => {
    const inputType = inputRef.current?.type;
    if (inputType === "text") {
      setType("password");
    } else if (inputType === "password") {
      setType("text");
    }
  };

  const value = watch(label);
  const showLabel = value == null || value === "";

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
        data-testid="input"
        type={type}
        {...register(label)}
        ref={(el) => {
          inputRef.current = el;
          register(label).ref(el);
        }}
      />
      {icon && (
        <EyeImg onClick={handleEyeClick} src="/images/eye.png" alt="eye" />
      )}
      {typeof errorMessage === "string" && <ErrMsg>{errorMessage}</ErrMsg>}
    </InputCont>
  );
}
