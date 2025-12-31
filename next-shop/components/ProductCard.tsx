import { Product } from "@/types/product";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border my-4 w-80 shadow hover:shadow-xl">
      <Link href={`/products/${product.id}`}>
        <img src="https://dummyimage.com/320x240"  alt=""/>
        <div className="p-2 flex justify-between items-baseline">
          <h2 className="text-lg font-bold">
            {product.title}
          </h2>
          <span>
            $ {product.price.toFixed(2)} 
          </span>
        </div>
      </Link>
    </div>
  );
}
