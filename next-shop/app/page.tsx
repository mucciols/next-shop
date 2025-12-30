import { getProductsRevalidate } from "@/lib/produtcs";
import { Product } from "@/types/product";
import Head from "next/head";
import Link from "next/link";
import Title from "@/components/title";

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
            <li key={product.id}>
              <Link href={`/products/${product.id}`}>
                  {product.title}
              </Link>
              
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
