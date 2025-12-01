import * as yup from "yup";
import {
  required,
  invalidPattern,
  lengthMessages,
  unmatchedPassword,
} from "../messages/validationMessages";
import { PASSWORD_VALIDATION, USERNAME_VALIDATION } from "../regex/regex";

const emailSchema = yup
  .string()
  .required(required("Email"))
  .email(invalidPattern.email)
  .required(required("Email"));

const passwordSchema = yup
  .string()
  .matches(PASSWORD_VALIDATION, invalidPattern.spaceValidation)
  .min(3, lengthMessages.minCharacters("Password"))
  .required(required("Password"));

export const registerSchema = yup.object({
  username: yup
    .string()
    .matches(USERNAME_VALIDATION, invalidPattern.userName)
    .min(3, lengthMessages.minCharacters("User name"))
    .required(required("User name")),

  email: emailSchema,

  password: passwordSchema,

  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password")], unmatchedPassword)
    .required(required("Confirm password")),
});

export const loginSchema = yup.object({
  email: emailSchema,
  password: passwordSchema,
});
