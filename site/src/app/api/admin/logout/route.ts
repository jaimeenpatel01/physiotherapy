import { NextResponse } from "next/server";
import { deleteSessionCookie } from "@/lib/admin-auth";

export async function POST() {
  const cookie = deleteSessionCookie();
  const response = NextResponse.json({ success: true });
  response.cookies.set(cookie.name, cookie.value, cookie.options);
  return response;
}
