import {addItem, createCart, getTotalPrice, isEmpty} from "../cart";
import { Product } from "../types";

const handbook: Product = { id: "P001", name: "TypeScript Handbook", price: 2000, category: "Books" };
const jestGuide: Product = { id: "P002", name: "Jest Testing Guide",  price: 1000, category: "Books" };


describe("Shopping Cart", () => {
    it("should be empty when first created", () => {
        // Given When
        const cart = createCart()

        // Then
        expect(cart.items).toHaveLength(0);
        expect(isEmpty(cart)).toBe(true);
    })

    it("should add a new product with the correct quantity", () => {
       // Given
       let cart = createCart();
       
       // When
       cart = addItem(handbook, 2, cart);
       cart = addItem(jestGuide, 1, cart);
       
       // Then
       expect(getTotalPrice(cart)).toBe(5000);

    })

    it("should calculate the correct total price across all items", () => {

    })
})