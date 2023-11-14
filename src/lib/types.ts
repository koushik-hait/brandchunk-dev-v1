import { User } from "@prisma/client";
import { ISODateString } from "next-auth";

export interface ISession {
  user?: User;
  expires: ISODateString;
}

type registerErrorType = {
  email?: string;
  name?: string;
  password?: string;
};

type LoginPayloadType = {
  email: string;
  password: string;
};

export type LoginErrorType = {
  email?: string;
  password?: string;
};

// * Auth INput type
type AuthInputType = {
  label: string;
  type: string;
  name: string;
  errors: registerErrorType;
  callback: (name: string, value: string) => void;
};

// * Forgot password payload type
type ForgotPasswordPayload = {
  email: string;
};

// reset password type
type ResetPasswordPayload = {
  email: string;
  signature: string;
  password: string;
  password_confirmation: string;
};

// * Magic link payload type
type MagicLinkPayload = {
  email: string;
};

type MagicLinkPayloadVerify = {
  email: string;
  token: string;
};
