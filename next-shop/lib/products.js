import { fetchJson } from '../app/api/api'

const CMS_URL = 'http://localhost:1337';

export async function getProducts() {
  const products = await fetchJson(`${CMS_URL}/products`);
  return products.map(stripProduct);
}

export async function getProduct(id) {
  const product = await fetchJson(`${CMS_URL}/products/${id}`);
  return product;
}

function stripProduct(product) {
  return {
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price
  };
}
