

// login ke e-commerce

import { addItem, createCart } from "./cart";
import { getAllProducts, getProduct } from "./product-api";

async function main() {
    const myCart = createCart();
    const typescriptHandbook = await getProduct("P00xxxx");
    addItem(typescriptHandbook!, 2, myCart);
}

main();