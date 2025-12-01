import { useNavigate } from "react-router";
import { useRegisterUserMutation } from "../app/services/registerApi";
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
    data
  ): Promise<void> => {
    const formData = new FormData();

    if (data) {
      formData.append("email", data.email);
      formData.append("username", data.username);
      formData.append("password", data.password);
      formData.append("password_confirmation", data.confirmpassword);

      if (avatar) {
        formData.append("avatar", avatar);
      }

      try {
        const result = await registerUser(formData).unwrap();

        localStorage.setItem("token", result.token);
        navigate("/login");
      } catch (error: unknown) {
        const err = error as RTKError;
        const errorsArr: string[] = Object.values(err?.data?.errors || {});
        setResponseMsg(errorsArr);
      }
    }
  };

  return { onSubmit, setAvatar, responseMsg };
};

export default useRegister;
