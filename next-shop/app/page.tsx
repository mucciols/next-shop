//import { getProductsRevalidate } from "@/lib/produtcs";
"use client";
import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { getProducts } from "@/lib/products";
import Page from "@/components/Page";
import store from "@/lib/redux/store";

//fetch server side data
export default function HomePage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  console.log('-------------------');
  console.log('-------------------');
  console.log('-------------------');
  console.log('store:', store.getState())
  console.log('-------------------');
  console.log('-------------------');
  console.log('-------------------');

  return (
    <Page title="Indoor Plants">
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {products.map((product: Product) => (
          <li key={product.id}>
            <ProductCard product={product}></ProductCard>
          </li>
        ))}
      </ul>
    </Page>
  );
}