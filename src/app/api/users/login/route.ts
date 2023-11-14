import { dbConnect, dbDisconnect } from "@/lib/prisma";
import { getErrorMessage } from "@/lib/utils";
import { loginSchema, type TLoginSchema } from "@/lib/zod/user";
import userRepo from "@/repos/user";
import { LoginType, type User } from "@prisma/client";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validateBody = loginSchema.safeParse(body);
    if (!validateBody.success) {
      return NextResponse.json({
        message: "Please Provide all credentials... ",
        success: false,
        statusCode: 400,
        data: null,
      });
    }
    //check for existed user
    const { email, username, password } = validateBody.data;
    const user = await userRepo.getUserByEmailorUsername(
      String(username),
      String(email)
    );
    if (!user) {
      return NextResponse.json({
        message: "User doesn't exist with this email ... ",
        success: false,
        statusCode: 400,
        data: null,
      });
    }
    //check login type
    if (user.login_type !== LoginType.EMAIL_PASSWORD) {
      // If user is registered with some other method, we will ask him/her to use the same method as registered.
      // This shows that if user is registered with methods other than email password, he/she will not be able to login with password. Which makes password field redundant for the SSO

      return NextResponse.json({
        message: `You have previously registered using ${user.login_type?.toLowerCase()}. Please use the ${user.login_type?.toLowerCase()} login option to access your account`,
        statusCode: 400,
        success: false,
        data: null,
      });
    }

    //match the hash password
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({
        message: "Invalid password ... ",
        success: false,
        statusCode: 400,
        data: null,
      });
    }
    //generate access token and refresh token
    const { accessToken, refreshToken } =
      await userRepo.generateAccessAndRefreshTokens(user?.id);

    // get the user document ignoring the password and refreshToken field
    const loggedInUser = await userRepo.getUser(user.id);

    //create response
    const response = NextResponse.json({
      message: "Login Successfull. Wellcome back...",
      success: true,
      statusCode: 200,
      data: loggedInUser,
    });

    //set cookie to response
    response.cookies.set("accessToken", accessToken, { httpOnly: true });
    response.cookies.set("refreshToken", refreshToken, { httpOnly: true });
    response.cookies.set("usertype", user?.role, { httpOnly: true });
    //return the response
    return response;
  } catch (error: unknown) {
    const errMesssage = getErrorMessage(error);
    return NextResponse.json({
      message: errMesssage,
      success: false,
      statusCode: 500,
      data: null,
    });
  } finally {
    await dbDisconnect();
  }
}
