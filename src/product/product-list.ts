import { addToCart } from '../cart/cart';
import { Product } from './../interfaces/product-Interface';

// 1. Obtener la lista de productos desde la API
const getProduct = async (): Promise<Product[]> => {
  const response = await fetch('https://fakestoreapi.com/products');
  const products = await response.json();
  return products;
}

// 2. Renderizar productos en el DOM
export const renderProductList = async () => {
  const products = await getProduct();

  const $productList = document.getElementById(
    "product-list") as HTMLDivElement;
    
  const $productTemplate = document.getElementById(
    'product-template') as HTMLTemplateElement;

  // Iterar sobre los productos y crear las tarjetas
  products.forEach((product) => {
    const clone = createProductCard(product, $productTemplate);
    $productList.appendChild(clone);
  });
};

// 2.1 Crear la tarjeta con el template HTML
const createProductCard = (
  product: Product,
  $productTemplate: HTMLTemplateElement
) => {
  const { title, id, image, price } = product;

  const clone = $productTemplate.content.cloneNode(true) as HTMLElement;
  clone.querySelector("img")!.src = image;
  clone.querySelector("h2")!.textContent = title;
  clone.querySelector("p span")!.textContent = `$${price}`;
  clone.querySelector("button")!.addEventListener("click", () => {
    addToCart({ title, price, id });
  });

  return clone;
};
