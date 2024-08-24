import './style.css';
import { renderProductList } from './product/product-list';
import { renderCartList } from './cart/cart-list';
import { initializeSearch } from './SearchProduct/searchProduct'; // Importamos la función de inicialización de búsqueda

// Agregamos un elemento para mostrar el mensaje de "Cargando..."
const loadingMessage = document.createElement('div');
loadingMessage.innerHTML = 'Cargando...';
document.body.appendChild(loadingMessage);

// Renderizamos la lista de productos y la lista de carrito de compras
initializeSearch();
renderProductList();
renderCartList();

// Ocultamos el mensaje de "Cargando..." después de 5 segundos
setTimeout(() => {
  loadingMessage.style.display = 'none';
}, 5000);

// Inicializamos la funcionalidad de búsqueda

