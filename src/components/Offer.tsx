
import React from 'react'
import Image from 'next/image'
import CountDown from './CountDown'

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:bg-[url('/offerBg.png')] md:h-[70vh]">
       {/*TEXT CONTAINER*/ }
       <div className='flex-1 flex flex-col items-center justify-center text-center gap-8 p-6 '>
          <h1 className='text-white text-5xl font-bold xl:text-6xl'>Delicious Burger & French Fries</h1>
          <p className='text-white xl:text-xl'>
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
          </p>
          <CountDown/>
          <button className='bg-red-500 text-white rounded-md py-3 px-6'>Order Now</button>
       </div>
       <div className='flex-1 w-full relative'>
        <Image src="/offerProduct.png" alt="" fill className='object-contain'></Image>
       </div>
    </div>
  )
}

export default Offer;