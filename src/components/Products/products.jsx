import React from 'react'
import r1 from '../../assets/All_rudraksha/r1.png'
import r2 from '../../assets/All_rudraksha/r2.png'
import r3 from '../../assets/All_rudraksha/r3.png'
import r4 from '../../assets/All_rudraksha/r4.png'
import r5 from '../../assets/All_rudraksha/r5.png'
import r6 from '../../assets/All_rudraksha/r6.png'
import r7 from '../../assets/All_rudraksha/r7.png'
import r8 from '../../assets/All_rudraksha/r8.png'
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import ProductPage from '../ProductPage/ProductPage'



export const ProductsData = [
  {
    id: 1,
    img: r1,
    title: "1 Mukhi Rudraksha",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: r2,
    title: "2 Mukhi Rudraksha",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: r3,
    title: "3 Mukhi Rudraksha",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: r4,
    title: "4 Mukhi Rudraksha",
    rating: 4.8,
    color: "yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: r4,
    title: "5 Mukhi Rudraksha",
    rating: 4.9,
    color: "green",
    aosDelay: "800",
  },
  {
    id: 6,
    img: r4,
    title: "6 Mukhi Rudraksha",
    rating: 4.9,
    color: "blue",
    aosDelay: "800",
  },
  {
    id: 7,
    img: r4,
    title: "7 Mukhi Rudraksha",
    rating: 4.9,
    color: "purple",
    aosDelay: "800",
  },
  {
    id: 8,
    img: r4,
    title: "8 Mukhi Rudraksha",
    rating: 4.9,
    color: "pink",
    aosDelay: "800",
  }
]



function Products() {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto pl-50 ">
          <h1 data-aos="fade-up" className="text-2xl text-orange-500 font-bold mb-3">
            List Of All Rudraksha
          </h1>
          <hr data-aos="fade-up" className="border-orange-300" />
          <p data-aos="fade-up" className="text-xl text-gray-400 mt-2.5">
            Shop Best Astrology Products And Services
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 place-items-center gap-6 justify-center pl-50">
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
                    className="h-[250px] w-[350px] object-cover rounded-md" />
                </Link>
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
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

