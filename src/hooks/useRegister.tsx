import { useNavigate } from "react-router";
import { useRegisterUserMutation } from "../store/services/authApi";
import type {
  RegisterFormData,
  RTKError,
} from "../pages/Register/RegisterBox/registerBox.types";
import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";

const useRegister = () => {
  const [avatar, setAvatar] = useState<File | null>(null);
  const [responseMsg, setResponseMsg] = useState<string[] | undefined>();
  const [registerUser] = useRegisterUserMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RegisterFormData> = async (
    data,
  ): Promise<void> => {
    const formData = new FormData();

    formData.append("email", data.email);
    formData.append("username", data.username);
    formData.append("password", data.password);
    formData.append("password_confirmation", data.confirmpassword);

    if (avatar) {
      formData.append("avatar", avatar);
    }

    try {
      const result = await registerUser(formData).unwrap();

      sessionStorage.setItem("token", result.token);
      navigate("/?page=1");
    } catch (error: unknown) {
      const err = error as RTKError;
      const errorsArr: string[] = Object.values(err?.data?.errors || {});
      setResponseMsg(errorsArr);
    }
  };

  return { onSubmit, setAvatar, responseMsg };
};

export default useRegister;
