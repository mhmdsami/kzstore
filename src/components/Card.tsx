import { Button } from "./index";
import React, { useContext } from "react";
import { CartContext } from "../store/CartContext";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Card = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: Product) => {
  const { addProductToCart } = useContext(CartContext);

  return (
    <div className="flex w-64 flex-col justify-around rounded-lg bg-white p-5">
      <div className="mb-3 w-fit self-end rounded-lg bg-black px-3 py-1 text-sm text-white">
        {rating.rate}/5.0 ({rating.count})
      </div>
      <img
        className="h-52 self-center object-contain"
        src={image}
        alt={description}
      />
      <p className="my-2 font-bold">{title}</p>
      <div className="flex items-center justify-between font-bold">
        <div className="text-xl">${price}</div>
        <Button
          className="px-3 py-2"
          onClick={() => addProductToCart(id, title, price)}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default Card;
