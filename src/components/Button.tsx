import React from "react";

const addToCart = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  const element = event.target as HTMLDivElement;
  console.log(element);
};
const Button = () => {
  return (
    <div
      className="w-fit cursor-pointer select-none self-end rounded-md bg-black px-3 py-2 font-medium text-white"
      onClick={addToCart}
    >
      Add to Cart
    </div>
  );
};

export default Button;
