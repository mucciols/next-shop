import { NextRequest, NextResponse } from "next/server";
import { fetchJson } from "../api";

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
    return NextResponse.json({
      id: user.id,
      name: user.username,
    });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 401 });
  }
}
