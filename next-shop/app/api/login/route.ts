import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {

  console.log('-------------------------------');
  console.log('-------------------------------');
  console.log('-------------------------------');
  console.log('api/login 1' , req.body);
  console.log('api/login 2' , res);
  console.log('-------------------------------');
  console.log('-------------------------------');
  console.log('-------------------------------');

  return NextResponse.json(200);
}
