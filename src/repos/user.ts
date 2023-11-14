import prisma, { dbConnect, dbDisconnect } from "@/lib/prisma";
import { generateAccessToken, generateRefreshToken } from "@/lib/utils";
import { TSignup, signupSchema } from "@/lib/zod/user";
import { PrismaClient, type User } from "@prisma/client";

class UserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
  }

  async createUser(data: TSignup): Promise<User> {
    return await this.prisma.user.create({data});
  }

  async getUser(id: string): Promise<User | null> {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async getUserByEmailorUsername(username:string, email: string): Promise<User | null> {
    return await prisma.user.findFirst({
      where: { OR: [
        {username: username},
         {email: email}
        ] 
      },
    });
  }

  async updateUser(id: string, data: Partial<User>): Promise<User> {
    return await this.prisma.user.update({ where: { id }, data });
  }

  async deleteUser(id: string): Promise<User> {
    return await this.prisma.user.delete({ where: { id } });
  }

  async generateAccessAndRefreshTokens(userId: string) {
    try {
      const user = await this.prisma.user.findUnique({ where: { id: userId } });
      if (!user) {
        throw new Error(
          "generateAccessAndRefreshTokens:: Internal Server Error..."
        );
      }

      const accessToken = generateAccessToken({
        id: user?.id.toString(),
        email: user?.email.toString(),
        username: user?.username!,
        role: user.role,
      });
      const refreshToken = generateRefreshToken(user?.id);

      await this.prisma.user.update({
        where: { id: user?.id },
        data: { refresh_token: refreshToken, access_token: accessToken },
      });

      return { accessToken, refreshToken };
    } catch (error) {
      throw new Error("Something went wrong while generating the access token");
    }
  }
}

const userRepo = new UserRepository();
export default userRepo;
