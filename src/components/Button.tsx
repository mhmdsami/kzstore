import React, { ReactNode } from "react";

interface Button {
  className?: string;
  children: ReactNode;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Button = ({ className, children, onClick }: Button) => {
  return (
    <div
      className={`${className} w-fit cursor-pointer select-none rounded-md bg-black font-medium text-white`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
