import { NextResponse } from "next/server";
import type { NextRequest } from "next/server.js";

export function middleware(request: NextRequest) {
    const path = request.n
}

export const confif = {
  matcher: ["/", "profile", "/login", "/signup"],
};