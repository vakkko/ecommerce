export const required = (field: string) => `${field} is required.`;

export const invalidPattern = {
  userName:
    "Username can only contain letters, numbers, and special characters",
  email: "Please enter a valid email address",
  spaceValidation: "Password cannot contain spaces",
  addressValidation: "Address should contain only letters and digits",
};

export const lengthMessages = {
  minCharacters: (field: string) => `${field} must be at least 3 characters`,
};

export const unmatchedPassword = "Password do not match";

export const priceFilterMissmatch =
  "From price must be less than or equal to To price";

export const numberType = (field: string) => `${field} field must be a number`;
