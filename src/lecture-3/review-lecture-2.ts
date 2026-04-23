

// Interface
interface User {
    id: number;
    username: string;
    email?: string; //optional
}

const aUser: User = {
    id: 123,
    username: "aUser"
}

// Union & Intersection

let mixedArray: (number | string)[];

type PaymentMethod = "cash" | "qris" | "bank_transfer";

type TransactionStatus = "pending" | "paid" | "shipped" | "completed" | "refunded" 

const myPaymentMethod: PaymentMethod = "cash";


interface Product {
    id: number;
    name: string;
    price: number;
}

interface CartItem {
    quantity: number;
    addedAt: string;
}


type CartProduct = Product & CartItem

// interface Category {
//     id: number;
//     name: string
// }

// const nestedCategories: Category[][] = [
//     [{id: 1, name: "cat"}],[{id: 2, name: "cat2"}],
// ]



function printCartProduct(item: CartProduct): void {
    const subtotal = item.price * item.quantity;
    console.log(`${item.name} ${item.quantity} = Rp ${subtotal}`);
}

const cartProducts: CartProduct[] = [
    {id: 1, name: "Laptop", price: 10_000_000, quantity: 1, addedAt: "2026-04-22"},
    {id: 2, name: "Nintendo Switch 2", price: 5_000_000, quantity: 2, addedAt: "2026-04-21"}
]

cartProducts.forEach((product) => printCartProduct(product));

for (const product of cartProducts){
    printCartProduct(product);
}

for (let i = 0; i < cartProducts.length; i++) {
    printCartProduct(cartProducts[i]);
}

export interface AnInterface {
    product: Product[];
}