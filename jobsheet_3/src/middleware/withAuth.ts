import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export default function withAuth(
  middleware: (req: NextRequest) => Promise<Response> | Response,
  protectedRoutes: string[]
) {
  return async (request: NextRequest) => {
    const { pathname } = request.nextUrl;

    if (protectedRoutes.some((route) => pathname.startsWith(route))) {
      const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
      });

      if (!token) {
        // 🔥 sesuai jobsheet → redirect ke HOME
        return NextResponse.redirect(new URL("/", request.url));
      }
    }

    const response = await middleware(request);
    return response instanceof Response ? response : NextResponse.next();
  };
}