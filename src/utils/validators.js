import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be at most 20 characters"),
  });