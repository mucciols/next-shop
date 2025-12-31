import { Product } from "../types/product";

export async function getProductsRevalidate(): Promise<Product[]> {
  const res = await fetch("http://localhost:1337/products", {
    next: { revalidate: 10 } // ⏱️ rigenera ogni 10 secondi
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}