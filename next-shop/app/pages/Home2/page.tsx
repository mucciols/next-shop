'use client';
import Title from "@/components/title";
import { getProducts } from "@/lib/products";

import Head from "next/head";
import { useEffect, useState } from "react";

//fetch data client side
export default function HomePage() {
  const [products, setProducts] = useState([]);
  useEffect(() =>{
    getProducts().then(products=>{
      setProducts(products);
    })
  },[]);

  console.log('[Home Page] render', products)
  return (
    <>
      <Head>
        <title>Next Shop clientside</title>
      </Head>
      <main className="p-2">
        <Title>Next Shop clientside</Title>
        <ul>
          { products.map((product)=>(
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
