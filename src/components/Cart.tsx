import { useContext } from "react";
import { Button } from "./";
import { CartContext } from "../store/CartContext";

interface CartProps {
  className?: string;
}

export interface CartProduct {
  id: number;
  name: string;
  pricePerItem: number;
  count: number;
}

const getTotalPrice = (cart: CartProduct[]) => {
  let total = 0;
  cart.forEach((p) => (total += p.count * p.pricePerItem));
  return total.toFixed(2);
};

const Cart = ({ className }: CartProps) => {
  const { cart, removeProduct } = useContext(CartContext);

  return (
    <div
      className={`${className} fixed right-0 bottom-0 hidden h-[80vh] w-1/2 flex-col gap-3 overflow-scroll rounded-tl-xl bg-white p-10 sm:flex`}
    >
      <div className="text-xl font-bold uppercase">Cart</div>
      <div className="flex justify-between">
        <div className="text-xl font-bold">Total</div>
        <div className="w-fit rounded-md bg-black px-2 py-1 text-center font-bold text-white">
          ${getTotalPrice(cart)}
        </div>
      </div>
      {cart.map(({ id, name, count, pricePerItem }: CartProduct, idx) => (
        <div key={idx} className="grid grid-cols-5 place-content-between">
          <div className="col-span-2">{name}</div>
          <div className="place-self-end font-bold">{count}</div>
          <div className="h-fit w-fit place-self-end rounded-md bg-black px-2 py-1 text-center text-white">
            ${(count * pricePerItem).toFixed(2)}
          </div>
          <Button
            className="place-self-end px-2 py-1"
            onClick={() => removeProduct(id)}
          >
            ❌
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
