import { cookies } from "next/headers";

const COOKIE_NAME = "admin-session";
const COOKIE_MAX_AGE = 60 * 60 * 8; // 8 hours

/**
 * Creates a simple session token by hashing the admin password.
 * This avoids external JWT dependencies while remaining secure enough
 * for a single-user admin portal.
 */
async function computeToken(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(`physio-admin-session:${password}`);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

/**
 * Verifies the current request has a valid admin session cookie.
 * Returns true if authenticated, false otherwise.
 */
export async function verifySession(): Promise<boolean> {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return false;

  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(COOKIE_NAME);
  if (!sessionCookie) return false;

  const expectedToken = await computeToken(password);
  return sessionCookie.value === expectedToken;
}

/**
 * Creates the session cookie value and cookie options.
 */
export async function createSessionCookie(password: string) {
  const token = await computeToken(password);
  return {
    name: COOKIE_NAME,
    value: token,
    options: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict" as const,
      maxAge: COOKIE_MAX_AGE,
      path: "/",
    },
  };
}

/**
 * Returns cookie deletion options to clear the session.
 */
export function deleteSessionCookie() {
  return {
    name: COOKIE_NAME,
    value: "",
    options: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict" as const,
      maxAge: 0,
      path: "/",
    },
  };
}
