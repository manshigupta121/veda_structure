import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { MdPriceChange } from "react-icons/md";




const Accordion = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 relative overflow-hidden  bg-[#f3bd10] mx-auto  justify-around items-center gap-6 p-6 '>

      <div className='flex flex-col flex-shrink-0 items-center text-center'>
        <div className='p-4 bg-red-800 rounded-full w-14 h-14 '><FaShippingFast className='text-white text-2xl' /></div>
        <div>
            <h3 className='font-bold text-red-800'>Fast Shipping</h3>
            <pre className='text-sm text-red-500'>Get your order delivered in record time
                <br /> 
                with our fast shipping options.</pre>
        </div>
      </div>

    

      <div className='flex flex-col flex-shrink-0 items-center text-center'>
        <div className='p-4 bg-red-800 rounded-full w-14 h-14 '><MdHealthAndSafety className='text-white text-2xl' /></div>
        <div>
            <h3 className='font-bold text-red-800'>Health & Safety</h3>
            <pre className='text-sm text-red-500'>We prioritize your health and safety
                <br />
                with our comprehensive measures.</pre>
        </div>
      </div>

      <div className='flex flex-col flex-shrink-0 items-center text-center'>
        <div className='p-4 bg-red-800 rounded-full w-14 h-14 '><MdPriceChange className='text-white text-2xl' /></div>
        <div >
            <h3 className='font-bold text-red-800'>Price Change</h3>
            <pre className='text-sm text-red-500 w-64 text-center mt-2 '>Stay updated with the latest
                <br />  price changes and exclusive offers.</pre>
        </div>
      </div>
      
    </div>
  )
}

export default Accordion