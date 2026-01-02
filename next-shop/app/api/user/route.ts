import { NextRequest, NextResponse } from "next/server";
import { fetchJson } from "../api";

export async function GET(req: NextRequest, res: NextResponse) {
  const jwtCookie = req.cookies.get("jwt");

  // console.log("--------------------------------------");
  // console.log("--------------------------------------");
  // console.log("--------------------------------------");

  if (!jwtCookie) {
    return NextResponse.json({ error: "Cookie not found" }, { status: 401 });
  }
    

  const { name, value } = jwtCookie;

  console.log("lettura dei cookie 1", name);
  console.log("lettura dei cookie 2", value);

  try {
    const user = await fetchJson("http://localhost:1337/users/me", {
      headers: { Authorization: `Bearer ${value}` },
    });

    // console.log("lettura dei cookie 3", user);
    // console.log("--------------------------------------");
    // console.log("--------------------------------------");
    // console.log("--------------------------------------");

    return NextResponse.json({ id: user.id, name: user.username });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 401 });
  }
}
