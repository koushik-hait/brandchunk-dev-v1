import { sendEmail } from "@/lib/mail";
import prisma, { dbDisconnect } from "@/lib/prisma";
import { generateTemporaryToken, getErrorMessage } from "@/lib/utils";
import { signupSchema } from "@/lib/zod/user";
import { UserRole } from "@prisma/client";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    //extract data from request
    const body = await req.json();
    const result = signupSchema.safeParse(body);
    console.log("body: ", body, "vaalidBody: ", result);
    if (!result.success) {
      console.log(result.error);
      return NextResponse.json({
        message: "Provide all the credentials with proper format...",
        success: false,
        data: null,
        statusCode: 403,
      });
    }
    const { username, email, role, password } = result.data;
    //check existed user
    const existedUser = await prisma.user.findUnique({
      where: { username: username, email: email },
    });
    if (existedUser) {
      return NextResponse.json({
        message: "Email or Username already exists",
        statusCode: 400,
        success: false,
        data: null,
      });
    }
    //hashed the password
    const hashedPassword = await bcryptjs.hash(password, 10);
    //create user
    const user = await prisma.user.create({
      data: {
        username,
        email,
        role: role || UserRole.USER,
        password: hashedPassword,
      },
    });
    //send email
    await sendEmail({
      email,
      emailType: "VERIFY_EMAIL",
      userId: String(user.id),
    });
    //return response
    return NextResponse.json({
      message: "User created Succesfully ...",
      success: true,
      data: null,
      statusCode: 200,
    });
  } catch (error: unknown) {
    const message = getErrorMessage(error);
    return NextResponse.json({
      message: message,
      success: false,
      data: null,
      statusCode: 500,
    });
  } finally {
    await dbDisconnect();
  }
};
