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

  // Clonar el contenido del template
  const clone = $productTemplate.content.cloneNode(true) as HTMLElement;

  // Configurar la imagen
  const imgElement = clone.querySelector("img")!;
  imgElement.src = image;

  // Configurar el título
  const titleElement = clone.querySelector("h2")!;
  titleElement.textContent = title;

  // Formatear el precio en pesos chilenos
  const formattedPrice = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
  }).format(price);
  
  // Configurar el precio
  const priceElement = clone.querySelector("p span")!;
  priceElement.textContent = formattedPrice.slice(0, 5);

  // Configurar el botón para agregar al carrito
  const buttonElement = clone.querySelector("button")!;
  buttonElement.addEventListener("click", () => {
    addToCart({ title, price, id });
  });

  return clone;
};

