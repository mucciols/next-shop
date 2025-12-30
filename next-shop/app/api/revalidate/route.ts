
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  //console.log('[api/products] handler')
  //const products = await getProducts();
  //return NextResponse.json(products);
  console.log('api/revalidate diocane 1---');
  console.log('api/revalidate diocane 1---');
  console.log('api/revalidate diocane 1---');
  console.log('api/revalidate diocane 1' , req);
  console.log('api/revalidate diocane 1---');
  console.log('api/revalidate diocane 1---');
  console.log('api/revalidate diocane 1---');
  console.log('api/revalidate diocane 3 body' , req.body);
  console.log('api/revalidate diocane 3 ---');
  console.log('api/revalidate diocane 3 ---');
  console.log('api/revalidate diocane 3 ---');
  
  return NextResponse.json(204);
}
