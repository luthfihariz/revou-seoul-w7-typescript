import { add } from "../calculator";

//add(2,3) = 5
//add(3,4) = 7

// TDD

test("returns the sum of two positive numbers", () => {
    expect(add(2,3)).toBe(5);
})

test("returns the sum of 7 and 3", () => {
    expect(add(7,3)).toBe(10);
})

test("return the sum of mixed numbers", () => {
    expect(add(10, -3)).toBe(7);
})

test("return the sum of mixed numbers", () => {
    expect(add(10000000, -3)).toBe(9999997);
})