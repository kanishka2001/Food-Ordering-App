import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const temp = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center'>

      {menu.map((category)=>(
        <Link href={`/temp/${category.slug}`}


        key={category.id} className="w-full  bg-cover p-8 h-1/3 md:h-1/2 " style={{backgroundImage: `url(${category.img})`}}>

          <div className={`text-${category.color} w-1/2`}>
            <h1 className="uppercase font-bold  md:text-1xl">{category.title}</h1>
            <p className="text-xs text-left my-2 md:text-xs lg:text-sm  ">{category.desc}</p>
            <button className={`hidden  2xl:block bg-white text-${category.color === "black" ? "white" : "red-500"} py-1 px-2 rounded-md`}>Explore</button>
          </div>
        </Link>
        
    

      ))}
    </div>
  )
}

export default temp