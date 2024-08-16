
import { CartItem } from "../interfaces/cart-item.interface";
import { renderCartList } from "./cart-list";

// 1.definir la varible del cart que va hacer n array del carItem[]
//  JSON.parse(localStorage.getItem('cart') || '[]'); es la llave para entrar al local storage

export const cartArray: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');

// 2. crear un metodo para agregar un item al carrito

interface ItemAddToCart {
    title: string;
    price: number;
    id: number;
}

 export const addToCart = ({ title, price, id}: ItemAddToCart) => {
    const cartItem = cartArray.find((cartItem) => cartItem.id === id);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cartArray.push({
            title,
            price,
            id,
            quantity: 1,
        });
    }
    // 3. guardar el carrito en el local storage (setItem)

    localStorage.setItem('cart', JSON.stringify(cartArray));
    renderCartList()
}
// 3. crear un metodo para remover un item del carrito
    // para eliminar solo se nececita el id del producto
    // (export ) es una función para que pueda ser utilizada en otras partes de tu aplicación. 
export const removeFromCart = (id: number) => {
    const itemIndex = cartArray.findIndex((cartItem) => cartItem.id === id);

    if(cartArray[itemIndex].quantity > 1) {
        cartArray[itemIndex].quantity -= 1;
    }else{ 
        cartArray.splice(itemIndex, 1);
    }
    //splice: Es un método que modifica el contenido de un arreglo eliminando o reemplazando elementos existentes.
    localStorage.setItem('cart', JSON.stringify(cartArray));
    renderCartList();
    }
// 4. crear un metodo para obtener el total del carrito

    export const getTotal = () => 
         cartArray.reduce((acc, item) => acc + item.price * item.quantity, 0);
    



