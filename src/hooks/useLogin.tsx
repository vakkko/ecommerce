import { useState } from "react";
import { useNavigate } from "react-router";
import { useLoginUserMutation } from "../app/services/authApi";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import type { LoginErr } from "../pages/Login/LoginBox/loginBox.types";

const useLogin = () => {
  const [loginError, setLoginError] = useState<string>();
  const navigate = useNavigate();
  const [loginUser] = useLoginUserMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data): Promise<void> => {
    const formData = new FormData();

    formData.append("email", data.email);
    formData.append("password", data.password);

    try {
      await loginUser(formData).unwrap();
      navigate("/products");
    } catch (error: unknown) {
      const err = error as LoginErr;
      setLoginError(err.data.message);
      console.error(error);
    }
  };
  return { loginError, onSubmit };
};

export default useLogin;
