export interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
}

export type RTKError = {
  status: number;
  data: { errors?: Record<string, string> };
};
