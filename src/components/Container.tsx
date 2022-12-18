import { Card, CartProduct } from "./index";
import type { Product } from "./Card";

interface Container {
  products: Product[];
  className?: string;
}

const Container = ({ products, className }: Container) => {
  return (
    <div
      className={`${className} mx-auto mx-10 mb-20 grid grid-cols-1 gap-y-10 lg:mx-20 lg:grid-cols-2 xl:grid-cols-3`}
    >
      {products.map((product: Product, idx) => (
        <Card key={idx} {...product} />
      ))}
    </div>
  );
};

export default Container;
