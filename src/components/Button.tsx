import React, { ReactNode } from "react";

interface Button {
  children: ReactNode;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Button = ({ children, onClick }: Button) => {
  return (
    <div
      className="w-fit cursor-pointer select-none self-end rounded-md bg-black px-3 py-2 font-medium text-white"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
