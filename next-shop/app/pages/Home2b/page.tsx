"use client";
import Title from "@/components/title";
import { Product } from "@/types/product";

import Head from "next/head";
import { useEffect, useState } from "react";

//fetch data client side
export default function HomePage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("/api/products");
      const products = await response.json();
      setProducts(products);
    })();
  }, []);

  console.log("[Home Page] render", products);
  return (
    <>
      <Head>
        <title>Next Shop clientside 2b</title>
      </Head>
      <main className="p-2">
        <Title>Next Shop clientside 2b</Title>
        <ul>
          {products.map((product: Product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
