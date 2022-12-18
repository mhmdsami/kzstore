import { useContext } from "react";
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
  const { cart } = useContext(CartContext);

  return (
    <div
      className={`${className} fixed right-0 hidden h-screen w-80 flex-col gap-3 overflow-scroll rounded-l-xl bg-white p-10 sm:flex`}
    >
      <div className="text-xl font-bold uppercase">Cart</div>
      {cart.map(({ name, count }: CartProduct, idx) => (
        <div key={idx} className="flex justify-between">
          <div className="w-2/3">{name}</div>
          <div className="font-bold">{count}</div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
