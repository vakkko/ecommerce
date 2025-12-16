import { useState } from "react";
import { useNavigate } from "react-router";
import { useLoginUserMutation } from "../store/services/authApi";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import type { LoginErr } from "../pages/Login/LoginBox/loginBox.types";
import { setAvatarImg } from "../store/slices/authSlice";
import { useDispatch } from "react-redux";

const useLogin = () => {
  const [loginError, setLoginError] = useState<string>();
  const navigate = useNavigate();
  const [loginUser] = useLoginUserMutation();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FieldValues> = async (data): Promise<void> => {
    const formData = new FormData();

    formData.append("email", data.email);
    formData.append("password", data.password);

    try {
      const response = await loginUser(formData).unwrap();
      dispatch(setAvatarImg(response.user.avatar));
      navigate("/products?page=1");
    } catch (error: unknown) {
      const err = error as LoginErr;
      setLoginError(err.data.message);
      console.error(error);
    }
  };
  return { loginError, onSubmit };
};

export default useLogin;
