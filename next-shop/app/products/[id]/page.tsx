"use client";

import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getProduct } from "@/lib/products";
import { Product } from "../../../types/product";
import { NextShopApiError } from "@/app/api/api";
import Page from "@/components/Page";

export default function ProductPage() {
  const params = useParams(); // Per leggere l'ID lato client
  const { id } = params;
  const [product, setProduct] = useState<Product>({
    id: 0,
    title: "",
    description: "",
    picture: {
      id: 0,
      title: "",
      url: "",
    },
    pictureUrl: "",
    price: 0,
  });
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    getProduct(id)
      .then((product) => {
        setProduct(product);
      })
      .catch((error) => {
        if (error instanceof NextShopApiError && error.status === 404) {
          setIsNotFound(true);
        } else {
          console.error(error);
        }
      });
  }, []);

  // Se l'effetto ha rilevato un 404, scateniamo la UI di not-found
  if (isNotFound) {
    return notFound();
  }

  return (
    <Page title={product.title}>
      <div className="flex flex-col lg:flex-row ">
        <div>
          <img src={product.pictureUrl} height={480} width={640} alt="" />
        </div>

        <div className="flex-1 lg:ml-4">
          <p className="text-sm">{product.description}</p>
          <p className="text-lg font-bold mt-2">$ {product.price.toFixed(2)}</p>
        </div>
      </div>
    </Page>
  );
}
