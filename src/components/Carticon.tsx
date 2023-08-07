
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartIcon = () => {

  type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    selectedsize: string;
    selectedprice: number;
    options?: { title: string; additionalPrice: number }[];
  };
  
  type Products = Product[];
  
  return (
    <Link href="/Cart" className="flex items-center gap-4">
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <Image src="/cart.png" alt="" fill />
      </div>
      <span>Cart </span>
    </Link>
  );
};

export default CartIcon;