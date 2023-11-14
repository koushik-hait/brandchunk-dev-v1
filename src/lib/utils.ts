import Config from "@/config/credentials";
import { UserRole } from "@prisma/client";
import bcryptjs from "bcryptjs";
import { clsx, type ClassValue } from "clsx";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const isPasswordCorrect = async function (
  password: string,
  hashedPassword: string
) {
  return await bcryptjs.compare(password, hashedPassword);
};

export const generateRefreshToken = function (id: string) {
  return jwt.sign(
    {
      _id: id,
    },
    Config.REFRESH_TOKEN_SECRET,
    { expiresIn: Config.REFRESH_TOKEN_EXPIRY }
  );
};

export const generateTemporaryToken = function () {
  // This token should be client facing
  // for example: for email verification unHashedToken should go into the user's mail
  const unHashedToken = crypto.randomBytes(20).toString("hex");

  // This should stay in the DB to compare at the time of verification
  const hashedToken = crypto
    .createHash("sha256")
    .update(unHashedToken)
    .digest("hex");
  // This is the expiry time for the token (20 minutes)
  const tokenExpiry = Date.now() + 20 * 60 * 60;

  return { unHashedToken, hashedToken, tokenExpiry };
};

export const generateAccessToken = function ({
  id,
  email,
  username,
  role,
}: {
  id: string;
  email: string;
  username: string;
  role: UserRole;
}) {
  return jwt.sign(
    {
      _id: id,
      email: email,
      username: username,
      role: role,
    },
    Config.ACCESS_TOKEN_SECRET,
    { expiresIn: Config.ACCESS_TOKEN_EXPIRY }
  );
};

export const getErrorMessage = (error: unknown): string => {
  let message;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "internal server error!...";
  }

  return message;
};


// Check if the code is running in a browser environment
export const isBrowser = typeof window !== "undefined";

// A class that provides utility functions for working with local storage
export class LocalStorage {
  // Get a value from local storage by key
  static get(key: string) {
    if (!isBrowser) return;
    const value = localStorage.getItem(key);
    if (value) {
      try {
        return JSON.parse(value);
      } catch (err) {
        return null;
      }
    }
    return null;
  }

  // Set a value in local storage by key
  static set(key: string, value: any) {
    if (!isBrowser) return;
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  // Remove a value from local storage by key
  static remove(key: string) {
    if (!isBrowser) return;
    localStorage.removeItem(key);
  }

  // Clear all items from local storage
  static clear() {
    if (!isBrowser) return;
    localStorage.clear();
  }
}


export const genSlug = (name: string) => {
  return name.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-");
}

