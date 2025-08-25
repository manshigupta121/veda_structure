import React from 'react'
import r1 from '../../assets/All_rudraksha/r1.png'
import r2 from '../../assets/All_rudraksha/r2.png'
import r3 from '../../assets/All_rudraksha/r3.png'
import r4 from '../../assets/All_rudraksha/r4.png'
import r5 from '../../assets/All_rudraksha/r5.png'
import r6 from '../../assets/All_rudraksha/r6.png'
import r7 from '../../assets/All_rudraksha/r7.png'
import r8 from '../../assets/All_rudraksha/r8.png'
import r9 from '../../assets/All_rudraksha/r9.png'
import r10 from '../../assets/All_rudraksha/r10.png'
import r11 from '../../assets/All_rudraksha/r11.png'
import r12 from '../../assets/All_rudraksha/r12.png'
import r13 from '../../assets/All_rudraksha/r13.png'
import r14 from '../../assets/All_rudraksha/r14.png'
import r15 from '../../assets/All_rudraksha/r15.png'
import r16 from '../../assets/All_rudraksha/r16.png'
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import ProductPage from '../ProductPage/ProductPage'



export const ProductsData = [
  {
    id: 1,
    img: r1,
    title: "1 Mukhi Rudraksha",
    price: "₹ 3190.00",

    aosDelay: "0",
  },
  {
    id: 2,
    img: r2,
    title: "2 Mukhi Rudraksha",
    price: "₹ 1151.00",

    aosDelay: "200",
  },
  {
    id: 3,
    img: r3,
    title: "3 Mukhi Rudraksha",
    price: "₹ 2990.00",

    aosDelay: "400",
  },
  {
    id: 4,
    img: r4,
    title: "4 Mukhi Rudraksha",
    price: "₹ 1990.00",
    
    aosDelay: "600",
  },
  {
    id: 5,
    img: r5,
    title: "5 Mukhi Rudraksha",
    price: "₹ 1990.00",

    aosDelay: "800",
  },
  {
    id: 6,
    img: r6,
    title: "6 Mukhi Rudraksha",
    price: "₹ 1990.00",

    aosDelay: "800",
  },
  {
    id: 7,
    img: r7,
    title: "7 Mukhi Rudraksha",
    price: "₹ 1990.00",

    aosDelay: "800",
  },
  {
    id: 8,
    img: r8,
    title: "8 Mukhi Rudraksha",
    price: "₹ 1990.00",

    aosDelay: "800",
  },
  {
    id: 9,
    img: r9,
    title: "9 Mukhi Rudraksha",
    price: "₹ 1990.00",

    aosDelay: "800",
  },
  {
    id: 10,
    img: r10,
    title: "10 Mukhi Rudraksha",
    price: "₹ 1990.00",

    aosDelay: "800",
  },
  {
    id: 11,
    img: r11,
    title: "11 Mukhi Rudraksha",
    price: "₹ 1990.00",

    aosDelay: "800",
  },
  {
    id: 12,
    img: r12,
    title: "12 Mukhi Rudraksha",
    price: "₹ 1990.00",

    aosDelay: "800",
  },
  {
    id: 13,
    img: r13,
    title: "13 Mukhi Rudraksha",
    price: "₹ 1990.00",

    aosDelay: "800",
  },
  {
    id: 14,
    img: r14,
    title: "14 Mukhi Rudraksha",
    price: "₹ 1990.00",

    aosDelay: "800",
  },
  {
    id: 15,
    img: r15,
    title: "Ganesha Rudraksha",
    price: "₹ 1990.00",

    aosDelay: "800",
  },
  {
    id: 16,
    img: r16,
    title: "Gauri Shankar Rudraksha",
    price: "₹ 1990.00",

    aosDelay: "800",
  },
]

function Products() {
  return (
    <div className="pt-14 mb-12 bg-amber-700/10">
      <div className="container w-[90%] mx-auto">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto ">
          <h1 data-aos="fade-up" className="text-2xl text-red-800 font-bold mb-3">
            List Of All Rudraksha
          </h1>
          <hr data-aos="fade-up" className="border-red-800" />
          <p data-aos="fade-up" className="text-xl text-yellow-500 mt-2.5">
            Shop Best Astrology Products And Services
          </p>
        </div>
        {/* Body section */}
        <div >
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 place-items-center gap-10 justify-center">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <Link to={`/products/${data.id}`}>
                  <img
                    src={data.img}
                    alt=""
                    className=" h-[250px] w-[350px] object-cover drop-shadow-xl hover:scale-105 transition-transform duration-300 border-2 border-transparent hover:border-gradient-to-r hover:border-[length:2px] hover:shadow-all-sides hover:p-2 hoverbg-white hover:shadow-xl hover:shadow-yellow-200/50 hover:border-solid  hover:scale(2) hover:transition-transform-0.25s ease-in " />
                </Link>
                <div className="mt-6  flex flex-row justify-center align-center">
                  <div className='flex flex-col justify-center align-center'>
                  <h3 className="font-semibold text-red-900">{data.title}</h3>
                  <div className='flex flex-row'>
                    <h3 className="text-lg font-bold text-red-500">{data.price}</h3>
                    <h4 className='mx-2 text-lg font-semibold text-green-500'>10% Off</h4>
                  </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="text-sm text-yellow-500 py-1 px-2 shadow-sm shadow-yellow-500 rounded-md hover:bg-yellow-400 hover:text-white transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products

