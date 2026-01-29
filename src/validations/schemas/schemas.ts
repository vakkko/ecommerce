import * as yup from "yup";
import {
  required,
  invalidPattern,
  lengthMessages,
  unmatchedPassword,
  priceFilterMissmatch,
  numberType,
} from "../messages/validationMessages";
import {
  ADDRESS_VALIDATION,
  PASSWORD_VALIDATION,
  USERNAME_VALIDATION,
} from "../regex/regex";

const emailSchema = yup
  .string()
  .required(required("Email"))
  .email(invalidPattern.email);

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

export const priceSchema = (value: string) =>
  yup
    .number()
    .transform((val, originValue) => (originValue === "" ? undefined : val))
    .typeError(numberType(value))
    .notRequired();

export const filterByPriceSchema = yup
  .object({
    from: priceSchema("From"),
    to: priceSchema("To"),
  })
  .test(priceFilterMissmatch, (values) => {
    if (!values) return true;

    const { from, to } = values;

    if (from == null || to == null) return true;

    return from <= to;
  });

export const productDetailsSchema = yup.object({
  color: yup.string().required(),
  size: yup.string().required(),
  quantity: yup.number().required(),
});

export const orderDetailsSchema = yup.object({
  name: yup.string().required(required("Name")),
  surname: yup.string().required(required("Surname")),
  email: emailSchema,
  address: yup
    .string()
    .required()
    .matches(ADDRESS_VALIDATION, invalidPattern.addressValidation),
  zip_code: yup
    .number()
    .required(required("Zip Code"))
    .typeError(numberType("Zip code")),
});
