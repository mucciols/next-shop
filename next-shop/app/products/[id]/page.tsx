"use client"; // Obbligatorio per usare gli hooks

import { notFound, useParams } from "next/navigation";
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
    title: "",
    description: "",
  });
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    getProduct(id).then((product) => {
      if (!product) 
        setIsNotFound(true);
      else 
        setProduct(product);
    });
  }, []);

  // Se l'effetto ha rilevato un 404, scateniamo la UI di not-found
  if (isNotFound) {
    return notFound();
  }

  return (
    <>
      <Head>
        <title>Next Shop 1b useEffect</title>
      </Head>
      <main className="p-2">
        <Title>{product.title} </Title>
        <p>{product.description}</p>
      </main>
    </>
  );
}
