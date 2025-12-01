export const required = (field: string) => `${field} is required.`;

export const invalidPattern = {
  userName:
    "Username can only contain letters, numbers, and special characters",
  email: "Please enter a valid email address",
  spaceValidation: "Password cannot contain spaces",
};

export const lengthMessages = {
  minCharacters: (field: string) => `${field} must be at least 3 characters`,
};

export const unmatchedPassword = "Password do not match";
