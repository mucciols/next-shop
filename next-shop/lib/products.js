import { fetchJson } from '../app/api/api'

const CMS_URL = 'http://localhost:1337';

export async function getProducts() {
  // console.log('prima di fetch 2')
  const products = await fetchJson(`${CMS_URL}/products`);
  return products.map(stripProduct);
}

export async function getProduct(id) {
  // console.log('prima di fetch 1')
  const product = await fetchJson(`${CMS_URL}/products/${id}`);
  return stripProduct(product);
}

function stripProduct(product) {
  return {
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    picture: product.picture,
    pictureUrl: CMS_URL + product.picture.url
  };
}
