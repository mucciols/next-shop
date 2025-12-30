import Title from "@/components/title";
import { getProducts } from "@/lib/products";
import { Product } from "@/types/product";

import Head from "next/head";

//fetch server side data
export default async function HomePage() {
  const products = await getProducts();
  console.log('[HomePage] 1 products', products)
  return (
    <>
      <Head>
        <title>Next Shop 1a serverside</title>
      </Head>
      <main className="p-2">
        <Title>Next Shop 1a serverside</Title>
        <ul>
          { products.map((product:Product)=>(
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
