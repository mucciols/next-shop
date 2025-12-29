import { Product } from "./types";

export async function getProductsRevalidate(): Promise<Product[]> {
  const res = await fetch("http://localhost:1337/products", {
    next: { revalidate: 30 } // ⏱️ rigenera ogni 60 secondi
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}