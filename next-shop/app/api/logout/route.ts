import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {

  try {
  
    console.log('chiamata la logout')

    const res = NextResponse.json({  });

    res.cookies.set("jwt", '', {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/api",
      expires: new Date(0)
    });

    return res;
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 401 });
  }
}
