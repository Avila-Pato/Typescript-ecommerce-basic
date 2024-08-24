import './style.css';

// Agregamos un elemento para mostrar el mensaje de "Cargando..."
const loadingMessage = document.createElement('div');
loadingMessage.innerHTML = 'Cargando...';
document.body.appendChild(loadingMessage);

// 3. Renderizar la lista de productos
import { renderProductList } from './product/product-list';
import { renderCartList } from './cart/cart-list';

// Renderizamos la lista de productos y la lista de carrito de compras
renderProductList();
renderCartList();

// Ocultamos el mensaje de "Cargando..." después de 5 segundos
setTimeout(() => {
  loadingMessage.style.display = 'none';
}, 5000);