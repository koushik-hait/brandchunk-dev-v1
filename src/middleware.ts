import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = 
    path === "/" || 
    path === "/denied" ||
    path === "/verify-email" ||
    path === "/forgot-password" ||
    path === "/reset-password";

  const token = request.cookies.get("accessToken")?.value || "";
  const role = request.cookies.get("usertype")?.value || "";

  if (!isPublicPath && token) {
    if (request.nextUrl.pathname.startsWith("/admin") && role !== "ADMIN") {
      return NextResponse.redirect(new URL("/denied", request.nextUrl));
    }
    if (request.nextUrl.pathname.startsWith("/seller") && role !== "SELLER") {
      return NextResponse.redirect(
        new URL("/denied", request.nextUrl)
      );
    }
      // return NextResponse.redirect(new URL("/", request.nextUrl));
    
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/profile",
    "/verify-email",
    "/forgot-password",
    "/reset-password",
    "/admin",
    "/seller",
    "/denied"
  ],
};