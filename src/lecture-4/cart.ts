import { Cart, CartItem, Product } from "./types";

export function createCart(): Cart {
    return {items: []};
}

export function addItem(product: Product, quantity:number, cart: Cart): Cart {
    const newItem: CartItem = {
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity
    }
    return {items: [...cart.items, newItem]};
}

export function getTotalPrice(cart: Cart): number {
    return cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
}

export function isEmpty(cart: Cart): boolean {
    return cart.items.length === 0;
}

export function clearCart(): Cart {
    return {items: []};
}