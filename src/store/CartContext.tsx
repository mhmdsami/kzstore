import { createContext, ReactNode, useState } from "react";
import type { CartProduct } from "../components";

interface CartContextProvider {
  children: ReactNode;
}

interface CartContext {
  cart: CartProduct[];
  addProductToCart: (id: number, name: string, price: number) => void;
  removeProduct: (id: number) => void;
}

const defaultContext: CartContext = {
  cart: [],
  addProductToCart: () => {},
  removeProduct: () => {},
};

export const CartContext = createContext<CartContext>(defaultContext);

const CartContextProvider = ({ children }: CartContextProvider) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  const productExistsInCart = (id: number) => {
    return cart.find((p) => p.id === id);
  };

  const addProductToCart = (id: number, name: string, pricePerItem: number) => {
    if (productExistsInCart(id)) {
      const newCart = cart.map((product) =>
        product.id === id ? { ...product, count: product.count + 1 } : product
      );
      setCart(newCart);
    } else {
      setCart([...cart, { id, name, pricePerItem, count: 1 }]);
    }
  };

  const removeProduct = (id: number) => {
    console.log("lol");
    const newCart = cart.filter((p) => p.id !== id);
    console.log(newCart);
    setCart(newCart);
  };

  const value = {
    cart,
    addProductToCart,
    removeProduct,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
