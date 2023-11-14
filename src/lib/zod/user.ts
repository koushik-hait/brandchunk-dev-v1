import {UserRole}  from "@prisma/client";
import z from "zod";

export const signupSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  role: z.nativeEnum(UserRole).optional(),
  password: z.string().min(6,{message: "password must be at least 6 characters long..."}),
});

export type TSignup = z.infer<typeof signupSchema>;

export const loginSchema = z.object({
  username: z.string().optional(),
  email: z.string().email().optional(),
  password: z.string().min(6,{message: "Password must be at least 6 characters long..."}),
});

export type TLoginSchema = z.infer<typeof loginSchema>;

export const sendEmailSchema = z.object({
  email: z.string().email(),
  emailType: z.string(),
  userId: z.string(),
});

export type TSendEmailParam = z.infer<typeof sendEmailSchema>;
