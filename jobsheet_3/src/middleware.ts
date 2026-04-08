import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "@/middleware/withAuth";

export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export default withAuth(middleware, ["/profile"]);