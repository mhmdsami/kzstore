import { useEffect, useState } from "react";
import { Header, Container, Cart } from "./components";
import type { Product, CartProduct } from "./components";

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
      <div className={isLoading ? "hidden" : "flex"}>
        <Container products={products} className="w-3/4" />
        <Cart />
      </div>
    </div>
  );
};
export default App;
