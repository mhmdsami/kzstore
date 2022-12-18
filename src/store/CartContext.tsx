import { createContext, ReactNode, useState } from "react";
import type { CartProduct } from "../components";

interface CartContextProvider {
  children: ReactNode;
}

interface CartContext {
  cart: CartProduct[];
  addProductToCart: (id: number, name: string) => void;
}

const defaultContext: CartContext = {
  cart: [],
  addProductToCart: () => {},
};

export const CartContext = createContext<CartContext>(defaultContext);

const CartContextProvider = ({ children }: CartContextProvider) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  const productExistsInCart = (id: number) => {
    return cart.find((p) => p.id === id);
  };

  const addProductToCart = (id: number, name: string) => {
    if (productExistsInCart(id)) {
      const newCart = cart.map((product) =>
        product.id === id ? { ...product, count: product.count + 1 } : product
      );
      setCart(newCart);
    } else {
      setCart([...cart, { id, name, count: 1 }]);
    }
  };

  const value = {
    cart,
    addProductToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
