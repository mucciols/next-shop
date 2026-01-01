//import { getProductsRevalidate } from "@/lib/produtcs";
'use client';
import { Product } from "@/types/product";
import Head from "next/head";
import Title from "@/components/title";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { getProducts } from "@/lib/products";

//fetch server side data
export default function HomePage() {
  //const products = await getProductsRevalidate();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Next Shop 1b - HOME- serverside use effect</title>
      </Head>
      <main className="p-2">
        <Title>Next Shop 1b - HOME- serverside use effect</Title>
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {products.map((product: Product) => (
            <li key={product.id}>
              <ProductCard product={product}></ProductCard>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
