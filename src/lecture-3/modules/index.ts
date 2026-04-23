import { cart } from "./cart";
import { AnInterface } from "../review-lecture-2";

let myCart: string[] = []
myCart = cart.addToCart(myCart, "Tumbler Minum 650ml");
myCart = cart.addToCart(myCart, "Mouse Logitech");

cart.printCart(myCart);

myCart = cart.clearCart();

cart.printCart(myCart);