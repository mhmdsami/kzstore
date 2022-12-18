import { useContext, useState } from "react";
import { CartContext } from "../store/CartContext";

interface CartProps {
  className?: string;
}

export interface CartProduct {
  id: number;
  name: string;
  count: number;
}

const Cart = ({ className }: CartProps) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  return (
    <div
      className={`${className} fixed right-0 hidden h-screen w-72 flex-col rounded-l-xl bg-white p-10 sm:flex`}
    >
      <div className="text-xl font-bold uppercase">Cart</div>
      {cart.map(({ id, count }: CartProduct) => (
        <div>
          {id}: {count}
        </div>
      ))}
    </div>
  );
};

export default Cart;
