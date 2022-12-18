import { useEffect, useState } from "react";
import { Header, Container, Cart } from "./components";
import CartContextProvider from "./store/CartContext";
import type { Product } from "./components";

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/products?limit=12`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <Header />
      {isLoading ? (
        <div className="flex h-[70vh] items-center justify-center text-4xl text-white">
          Loading...
        </div>
      ) : (
        <CartContextProvider>
          <Container products={products} className="w-1/2" />
          <Cart />
        </CartContextProvider>
      )}
    </div>
  );
};
export default App;
