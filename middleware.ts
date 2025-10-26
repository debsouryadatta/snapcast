import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import aj, { createMiddleware, detectBot, shield } from "./lib/arcjet";

export async function middleware(request: NextRequest) {
  // Get the session token from cookies
  const sessionCookie = request.cookies.get("better-auth.session_token");

  // If no session token, redirect to sign-in
  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}
const validate = aj
  .withRule(
    shield({
      mode: "LIVE",
    })
  )
  .withRule(
    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE", "G00G1E_CRAWLER"], // allow other bots if you want to.
    })
  );

export default createMiddleware(validate);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sign-in|assets).*)"],
};

// ⨯ [TypeError: Body is unusable: Body has already been read]
