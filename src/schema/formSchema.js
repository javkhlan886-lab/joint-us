import { z } from "zod";

export const stepOneSchema = z.object({
  firstName: z.string().min(2, "First name required"),
  lastName: z.string().min(2, "Last name required"),
  username: z.string().min(3, "Username too short"),
});

export const stepTwoSchema = z.object({
  email: z.string().email("Invalid email"),
  phone: z.string().min(8, "Phone required"),
  password: z.string().min(6, "Minimum 6 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export const stepThreeSchema = z.object({
  dateOfBirth: z.string().min(1, "Required"),
  profileImage: z.any(),
});