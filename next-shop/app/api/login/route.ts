import { NextRequest, NextResponse } from "next/server";
import { fetchJson } from "../api";
import { cookies } from "next/headers";
//import { cookie } from 'cookie';

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();

  const { email, password } = body;

  if (!email) {
    return NextResponse.json({ error: "Email requested" }, { status: 400 });
  }

  if (!password) {
    return NextResponse.json({ error: "Password requested" }, { status: 400 });
  }

  try {
    const { jwt, user } = await fetchJson("http://localhost:1337/auth/local", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier: email, password: password }),
    });

    const res = NextResponse.json({
      id: user.id,
      name: user.username,
    });

    res.cookies.set("jwt", jwt, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/api",
      maxAge: 60 * 60,
    });

    return res;
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 401 });
  }
}
