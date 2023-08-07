"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";

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

const CartPage = () => {
  const [cartitems, setcartitems] = useState<Products>([]);
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartitems");
    if (storedCartItems) {
      const parsedCartItems = JSON.parse(storedCartItems);
      if (Array.isArray(parsedCartItems)) {
        setcartitems(parsedCartItems);
      } else {
        console.error("Stored cart items are not in the correct format.");
      }
    }
    console.log(cartitems);
  }, []);

  useEffect(() => {
    localStorage.setItem("cartitems", JSON.stringify(cartitems));
  }, [cartitems]);

  let del = (item: Product) => {
    const newarray = cartitems.filter((i) => i.title != item.title);
    setcartitems([...newarray]);
    localStorage.setItem("cartitems", JSON.stringify(newarray));
  };

  // Calculate the subtotal of all cart items
  const calculateSubtotal = () => {
    return cartitems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]  flex flex-col text-red-500 lg:flex-row">
      {/* PRODUCTS CONTAINER */}
      <div className="flex-1 p-4 flex flex-col justify-start overflow-y-auto overflow-x-auto  lg:h-full lg:w-1/2 xl:w-1/2 lg:px-20 xl:px-40">
        {cartitems.map((item) => (
          <div key={item.id} className="mb-4 ">
            {/* SINGLE ITEM */}
            <div className="flex items-center justify-between">
              {item.img && <Image src={item.img} alt="" width={100} height={100} />}
              <div className="">
                <h1 className="uppercase text-sm font-bold">{item.title}</h1>
                <span>Large</span>
              </div>
              <h2 className="font-bold">${item.price.toFixed(2)}</h2>
              <span className="cursor-pointer ml-2" onClick={() => del(item)}>
                X
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="flex-1 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full  lg:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="">Subtotal ({cartitems.length} items)</span>
          <span className="">${calculateSubtotal().toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL (INCL. VAT)</span>
          <span className="font-bold">${calculateSubtotal().toFixed(2)}</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">CHECKOUT</button>
      </div>
    </div>
  );
};

export default CartPage;
