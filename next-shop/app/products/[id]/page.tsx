"use client"; // Obbligatorio per usare gli hooks

import { useParams } from "next/navigation";
import Head from "next/head";
import Title from "@/components/title";
import { useEffect, useState } from "react";
import { getProduct } from "@/lib/products";
import { Product } from "../../../types/product";

export default function ProductPage() {
  const params = useParams(); // Per leggere l'ID lato client
  const { id } = params;
  const [product, setProduct] = useState<Product>({
    id: 0,
    title: '',
    description: ''
  });

  useEffect(() =>{
    getProduct(id).then(product=>{
      setProduct(product);
    })
  },[]);

  return (
    <>
      <Head>
        <title>Next Shop 1b serverside revalidate</title>
      </Head>
      <main className="p-2">
        <Title>{product.title} </Title>
        <p>
          {product.description}
        </p>
      </main>
    </>
  );
}
