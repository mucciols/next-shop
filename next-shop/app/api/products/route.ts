import { getProducts } from "@/lib/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  console.log('[api/products] handler')
  const products = await getProducts();
  return NextResponse.json(products);
}
