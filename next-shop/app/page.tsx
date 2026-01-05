//import { getProductsRevalidate } from "@/lib/produtcs";
"use client";
import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { getProducts } from "@/lib/products";
import Page from "@/components/Page";
import store from "@/lib/redux/store";
import { addTask, completedTask, removeTask } from "@/lib/redux/todoListReducer/action";
//import {  fetchToDo,} from "@/lib/redux/todoListReducer/action";
//import { addTask, removeTask, completedTask } from "@/lib/redux/todoListReducer/action";


//fetch server side data
export default function HomePage() {
  const [products, setProducts] = useState([]);

  function testStore() {
    console.log("-------------------");
    console.log("-------------------");
    console.log("-------------------");

    //funzione che viene chiamata tutte le volte che c'è una modifica allo store
    const unsubscribe = store.subscribe(() => {
      console.log("---Store Updated:", store.getState());
    });

    // questa funzione e quella sotto fanno la stessa
    // cosa ossia aggiungere un elemento allo store
    //store.dispatch(addTask("Task 1"));


    //store.dispatch({ type: "ADD_TASK", payload:{ task: "Task 1" }})
    //store.dispatch(addTask({ task: "Task 1" }))
    store.dispatch(addTask({ task: "Title 1" }));
    // store.dispatch({ type: "ADD_USER", payload:{ id: 1 } })

    //unsubscribe();

    // questa funzione e quella sotto fanno la stessa
    // cosa ossia aggiungere un elemento allo store
    store.dispatch(completedTask({ id: 1 }));
    store.dispatch(removeTask({ id: 1 }));
    //store.dispatch(fetchToDo());

    //store.dispatch(removeTask(1));
    //store.dispatch({ type: "REMOVE_TASK", payload:{ id: 1 } })

    //console.log("---Store content:", store.getState());
    console.log("-------------------");
    console.log("-------------------");
    console.log("-------------------");
  }

  useEffect(() => {
    testStore();
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <Page title="Indoor Plants">
      <p>plants</p>
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
