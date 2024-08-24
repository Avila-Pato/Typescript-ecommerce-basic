// 5. renderizar el carrito

import { addToCart, cartArray, getTotal, removeFromCart } from "./cart";
import { CartItem } from './../interfaces/cart-item.interface';

const $cartList = document.querySelector
('#cart-list') as HTMLUListElement;
const $cartTemplate = document.querySelector
('#cart-template') as HTMLTemplateElement;
const $cartTotal = document.querySelector('#cart-total') as HTMLParagraphElement;

export const renderCartList = () => {
    // limpiar el carrito siempre en 0
    $cartList.innerHTML = '';

    cartArray.forEach((cartItem) => {
        const clone = createCartItem(cartItem, $cartTemplate);
        $cartList.appendChild(clone);
    });
    // 6. renderizar el total del carrito si esta vacio 
    if(cartArray.length === 0) {
        $cartTotal.innerHTML = '<p>El carrito esta vacio</p>';
    }else{
        $cartTotal.textContent = `Total: $${getTotal().toFixed(3)}`;
    }
}
const createCartItem = (cartItem: CartItem, $cartTemplate: HTMLTemplateElement) => {
    const { title, price, id, quantity } = cartItem;

    const clone = $cartTemplate.content.cloneNode(true) as HTMLElement;

    // Corregir los selectores
    clone.querySelector("[data-cart='title']")!.textContent = title;
    clone.querySelector("[data-cart='price']")!.textContent = `$${(price * quantity).toFixed(2)}`;
    clone.querySelector("[data-cart='quantity']")!.textContent = `Cantidad: ${quantity}`;

    clone.querySelector("[data-cart='increment']")!.addEventListener("click", () => {
        addToCart({ title, price, id });
    });

    clone.querySelector("[data-cart='decrement']")!.addEventListener("click", () => {
        removeFromCart(id);
    });

    return clone;
};
