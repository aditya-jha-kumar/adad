import { NextResponse } from "next/server";
import type { NextRequest } from "next/server.js";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/login" || path == "signup";
  const token = request.cookies.get("token")?.value || "";

  if(ks)
}

export const confif = {
  matcher: ["/", "profile", "/login", "/signup"],
};