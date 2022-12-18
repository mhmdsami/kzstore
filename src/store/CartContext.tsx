import { createContext, ReactNode } from "react";
import type { CartProduct } from "../components";

interface CartContextProviderProps {
  children: ReactNode;
  value: CartProduct[];
}
export const CartContext = createContext<CartProduct[]>([]);

const CartContextProvider = ({ children, value }: CartContextProviderProps) => {
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
