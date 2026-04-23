function addToCart(items: string[], newItem: string): string[] {
    return [...items, newItem];
}

function clearCart(): string[] {
    return []
}

function printCart(items: string[]): void {
    if (items.length === 0){
        console.log("Your cart is empty");
        return;
    }

    items.forEach((item) => {
        console.log(`Item: ${item}`)
    })
    return;
}

export let user = {
    id: 123,
    username: "sert"
}

export const cart = {
    addToCart,
    clearCart,
    printCart
}