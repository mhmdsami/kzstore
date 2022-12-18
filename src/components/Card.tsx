import { Button } from "./index";

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
  return (
    <div className="flex w-64 flex-col justify-around rounded-lg bg-white p-5">
      <img
        className="h-52 self-center object-contain"
        src={image}
        alt={description}
      />
      <p className="my-2 font-bold">{title}</p>
      <Button />
    </div>
  );
};

export default Card;
