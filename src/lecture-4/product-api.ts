import { Product } from "./types";

// Simulated product database
const inventory: Product[] = [
  { id: "P001", name: "TypeScript Handbook", price: 29_000, category: "Books" },
  { id: "P002", name: "Jest Testing Guide",  price: 19_000, category: "Books" },
  { id: "P003", name: "Node.js Cookbook",    price: 24_000, category: "Books" },
  { id: "P004", name: "Clean Code",          price: 34_000, category: "Books" },
];

export async function getProduct(id: string): Promise<Product | null> {
  await delay(1000);
  return inventory.find((p) => p.id === id) ?? null;
}

export async function getAllProducts(): Promise<Product[]> {
  await delay(1000);
  return [...inventory];
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
