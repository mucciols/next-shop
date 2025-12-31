// async function fetchJson(url) {
//   const response = await fetch(url);
//   if (response.status === 404) {
//     return null; //
//   }
//   return await response.json();
// }

import { fetchJson } from '../app/api/api'

const CMS_URL = 'http://localhost:1337';

export async function getProducts() {
  // const response = await fetch("http://localhost:1337/products");
  // const products = await response.json();
  // return products.map(stripProduct);

  const products = await fetchJson(`${CMS_URL}/products`);
  return products.map(stripProduct);
}

export async function getProduct(id) {
  // const response = await fetch(`http://localhost:1337/products/${id}`);
  // if (response.status === 404) {
  //   return null; //
  // }
  // const products = await response.json();
  // return products;

  const product = await fetchJson(`${CMS_URL}/products/${id}`);
  return product;
}

function stripProduct(product) {
  return {
    id: product.id,
    title: product.title,
  };
}
