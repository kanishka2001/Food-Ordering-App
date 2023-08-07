"use client"
import { burgers } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React,{useState,useEffect} from "react";

const Categorypage = () => {

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

  const [singleProduct, setSingleProduct] = useState<Product>();
  const [cartitems,setcartitems]=useState<Products>([])

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartitems");
    if (storedCartItems) {
      setcartitems(JSON.parse(storedCartItems));
    }
  }, []);

  let addcart = (item: Product) => {
    let newitems= [...cartitems,item]
    setcartitems(newitems);
    console.log(cartitems); // Note: 'cartitems' will not be updated immediately after 'setCartItems'
    localStorage.setItem("cartitems", JSON.stringify(newitems)); // Update local storage as well
  };
  let add = (item : Product)=>{
    setSingleProduct(item)
    console.log(item)
    localStorage.setItem("singleburger",JSON.stringify(item))

  }
  return (
    <div className="flex flex-wrap text-red-500">
      {burgers.map((item)=>(
        <div className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-50"   key={item.id} onClick={()=> add(item)}>

        {item.img && (
          <div className="relative h-[80%]">
            <Image src={item.img} alt="" fill className="object-contain"></Image>
          </div>
        )}
         <div className="flex items-center justify-between font-bold">
          <h1 className="text-2xl font-bold uppercase">{item.title}</h1>
          <h2 className="group-hover:hidden text-xl">${item.price}</h2>
          <button className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md" onClick={()=> addcart(item)}>ADD TO CART</button>
         </div>
        </div>
      ))}
    </div>
  )
}

export default Categorypage