//import { getProductsRevalidate } from "@/lib/produtcs";
"use client";
import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { getProducts } from "@/lib/products";
import Page from "@/components/Page";
import store from "@/lib/redux/store";
import { addTask, removeTask } from "@/lib/redux/todoListReducer/action";

//fetch server side data
export default function HomePage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  console.log("-------------------");
  console.log("-------------------");
  console.log("-------------------");

  // questa funzione e quella sotto fanno la stessa
  // cosa ossia aggiungere un elemento allo store
  store.dispatch(addTask("Task 1"));
  //store.dispatch({ type: "ADD_TASK", payload:{ task: "Task 1" }})

  // store.dispatch({ type: "ADD_USER", payload:{ id: 1 } })
  console.log("store:", store.getState());

  // questa funzione e quella sotto fanno la stessa
  // cosa ossia aggiungere un elemento allo store
  store.dispatch(removeTask(1));
  //store.dispatch({ type: "REMOVE_TASK", payload:{ id: 1 } })

  console.log("-------------------");
  console.log("-------------------");
  console.log("-------------------");

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
