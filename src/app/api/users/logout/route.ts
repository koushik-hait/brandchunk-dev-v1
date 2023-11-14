import { getErrorMessage } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const response = NextResponse.json({
      message: "Logout Successfull ...",
      success: true,
      statusCode: 200,
      data: null,
    });
    response.cookies.set("accessToken", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    response.cookies.set("refreshToken", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    response.cookies.set("usertype", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    return response;
  } catch (error: unknown) {
    const errMessage = getErrorMessage(error);
    return NextResponse.json({
      message: errMessage,
      success: false,
      statusCode: 500,
      data: null,
    });
  }
};
