"use client"
import React,{useState,useEffect} from 'react';
import Image from 'next/image';
import { featuredProducts } from '@/data';

const Featured = () => {

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
  return (
    <div className='w-screen overflow-x-scroll text-red-500'>
      
      <div className='w-max flex'>

        {featuredProducts.map((item)=>(

          <div className='w-screen h-[60vh] flex flex-col items-center justify-around  hover:bg-fuchsia-50 transition-all duration-300  md:w-[50vw] xl:w-[33vw] xl:h-[90vh]' key={item.id}>

            {item.img && (
              <div key={item.id} className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                <Image src={item.img} alt="" fill className='object-contain' />
              </div>
            )}
        
          <div className='flex-1 flex flex-col items-center justify-center text-center gap-4'>
            <h1 className='text-xl font-bold uppercase xl: text-2xl 2xl: text-3xl'>{item.title}</h1>
            <p className='p-4 2xl:p-8'>{item.desc}</p>
            <span className='text-xl font-bold'>${item.price}</span>
            <button className='bg-red-500 text-white p-2 rounded-md' onClick={()=> addcart(item)}>Add to Cart</button>
          </div>
        </div>

        ))}
        
      </div>
    </div>
  );
}

export default Featured;
