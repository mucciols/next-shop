import Title from "@/components/title";
import { getProductsRevalidate } from "@/lib/produtcs";
import { Product } from "@/lib/types";

import Head from "next/head";

//fetch server side data
export default async function HomePage() {
  const products = await getProductsRevalidate();
  console.log('[HomePage] 1 products', products)
  return (
    <>
      <Head>
        <title>Next Shop 1b serverside revalidate</title>
      </Head>
      <main className="p-2">
        <Title>Next Shop 1b serverside revalidate</Title>
        <ul>
          { products.map((product:Product)=>(
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
