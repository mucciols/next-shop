import Title from "@/components/title";
import Head from "next/head";

const products = [
  { id:1, title :'First Product' },
  { id:2, title :'Second product' },
];

export default function HomePage() {
  console.log('[Home Page] render', products)
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="p-2">
        <Title>Next Shop</Title>
        <ul>
          { products.map((product)=>(
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
