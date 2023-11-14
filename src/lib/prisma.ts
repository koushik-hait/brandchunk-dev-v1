import Conf from "@/config/credentials";
import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

declare global {
  namespace globalThis {
    var prisma: PrismaClient | undefined;
    interface Global {}
  }
}

if (Conf.APP_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }

  prisma = global.prisma;
}

export const dbConnect = async () => {
  try {
    await prisma.$connect();
  } catch (error: any) {
    console.log(error);
    return new Error(error?.message);
  }
};

export const dbDisconnect = async () => {
  try {
    await prisma.$disconnect();
  } catch (error: any) {
    console.log(error);
    return new Error(error?.message);
  }
};

// export function exclude<User, Key extends keyof User>(
//   user: User, 
//   keys: Key[]
//   ): Omit<User, Key> {
//   return Object.fromEntries(Object.entries(user).filter(([key]) => !keys.includes(key)));
// }

export default prisma;
