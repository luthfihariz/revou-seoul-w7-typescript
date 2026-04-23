export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
  }
  
  export interface CartItem {
    productId: string;
    name: string;
    price: number;
    quantity: number;
  }
  
  export interface Cart {
    items: CartItem[];
  }
  
  export interface Order {
    id: string;
    customerName: string;
    items: CartItem[];
    total: number;
    status: OrderStatus;
    createdAt: string;
  }

  export enum OrderStatus {
    Pending   = "PENDING",
    Confirmed = "CONFIRMED",
    Shipped   = "SHIPPED",
    Delivered = "DELIVERED",
    Cancelled = "CANCELLED",
  }

  export type OrderResult = { success: true; order: Order } | { success: false; message: string };
