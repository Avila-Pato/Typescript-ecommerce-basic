
// Función para filtrar productos
export function filterProducts(searchTerm: string) {
    const productList = document.getElementById('product-list');
    if (!productList) return;
    const products = Array.from(productList.querySelectorAll('article'));
  
    products.forEach((product) => {
        // el search es insensitive
      const title = product.querySelector('h2')?.textContent?.toLowerCase() || '';
      if (title.includes(searchTerm.toLowerCase())) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  }  
  // Inicializar funcionalidad de búsqueda
  export function initializeSearch() {
    const searchInput = document.getElementById('search-input') as HTMLInputElement;
    const searchButton = document.getElementById('search-button');
  
    // Agregar evento al botón de búsqueda
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            const searchTerm = searchInput.value;
            filterProducts(searchTerm);
        });
    }
  
    // (Opcional) Agregar búsqueda en tiempo real al campo de entrada
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value;
        filterProducts(searchTerm);
    });
}  