import { useRef, useState } from "react";
import type { InputProps } from "./input.types";
import { ErrMsg, EyeImg, InputCont } from "./inpur.styled";
import type { FieldValues } from "react-hook-form";

export default function Input<T extends FieldValues>({
  placeholder,
  icon,
  label,
  register,
  errors,
}: InputProps<T>) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showLabel, setShowLabel] = useState<boolean>(true);
  const [type, setType] = useState<string | undefined>(() =>
    icon ? "password" : undefined
  );

  const handleLabelClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      setShowLabel(false);
    }
  };

  const handleInputClick = () => {
    setShowLabel(false);
  };

  const handleEyeClick = () => {
    const inputType = inputRef.current?.type;
    if (inputType === "text") {
      setType("password");
    } else if (inputType === "password") {
      setType("text");
    }
  };

  const handleInputBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setShowLabel(true);
    }
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
        data-testid="input"
        type={type}
        onClick={handleInputClick}
        {...register(label)}
        ref={(el) => {
          inputRef.current = el;
          register(label).ref(el);
        }}
        onBlur={handleInputBlur}
      />
      {icon && (
        <EyeImg onClick={handleEyeClick} src="/images/eye.png" alt="eye" />
      )}
      {typeof errorMessage === "string" && <ErrMsg>{errorMessage}</ErrMsg>}
    </InputCont>
  );
}
