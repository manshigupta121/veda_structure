import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { ProductsData } from '/src/components/Products/products';
import Products from '../Products/products';

function ProductPage() {

    const { id } = useParams();

    const product = ProductsData.find((data) => data.id === parseInt(id));

    const [images, setImages] = useState({
        ekMukhi1: "https://vedashopping.techuptechnologies.in/public/uploads/all/2cm8PMQwyFKXK8wlsvVqYxzIVGplaEBGa5o7Ub0T.png",
        ekMukhi2: "https://i.pinimg.com/736x/2f/f4/b9/2ff4b946bd9a3c3f048b52b0efb9b7c7.jpg",
        ekMukhi3: "https://i.pinimg.com/1200x/1e/84/79/1e8479c920b4aade9d0b6ef02ee052bc.jpg",
        ekMukhi4: "https://i.pinimg.com/736x/53/c9/1d/53c91dea6cc374d6da5b8a1a29dfaf0e.jpg"
    });

    const [activeImg, setActiveImage] = useState(images.ekMukhi1);

    const [amount, setAmount] = useState(1);


    return (

        <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
            <div className='flex flex-col gap-6 lg:w-2/4'>
                <img src={activeImg} alt="" className='w-[80%] h-[80%] aspect-square object-cover hover:p-3 hover:border-2 hover:shadow-2xl  hover:border-yellow-400' />
                <div className='flex flex-row justify-between h-24 w-full lg:w-3/4'>
                    <img src={images.ekMukhi1} alt="" className='w-24 h-24  cursor-pointer hover:p-3 hover:border-2 hover:shadow-2xl  hover:border-yellow-400' onMouseEnter={() => setActiveImage(images.ekMukhi1)} />
                    <img src={images.ekMukhi2} alt="" className='w-24 h-24  cursor-pointer hover:p-3 hover:border-2 hover:shadow-2xl  hover:border-yellow-400' onMouseEnter={() => setActiveImage(images.ekMukhi2)} />
                    <img src={images.ekMukhi3} alt="" className='w-24 h-24  cursor-pointer hover:p-3 hover:border-2 hover:shadow-2xl  hover:border-yellow-400' onMouseEnter={() => setActiveImage(images.ekMukhi3)} />
                    <img src={images.ekMukhi4} alt="" className='w-24 h-24  cursor-pointer hover:p-3 hover:border-2 hover:shadow-2xl  hover:border-yellow-400' onMouseEnter={() => setActiveImage(images.ekMukhi4)} />
                </div>
            </div>
            {/* ABOUT */}
            <div className='flex flex-col gap-4 lg:w-2/4'>
                <div>
                    <span className=' text-yellow-500 font-semibold'>Special Rudaraksha</span>
                    <h1 className='text-3xl font-bold'>1 Mukhi Rudraksha </h1>
                </div>
                <p className='text-gray-700'>
                    The Ek Mukhi Rudraksha, symbolizing Lord Shiva, is believed to bring deep inner peace, clarity of mind, and spiritual growth. It is said to enhance concentration, sharpen focus, and strengthen leadership qualities, helping the wearer make confident decisions. Along with reducing stress, it supports harmony and balance in life, making it one of the most powerful and revered Rudrakshas.
                </p>
                <h6 className='text-2xl font-semibold'>Rs. 3,190.0   <span><h6 className='text-green-600'>10% Off</h6></span> </h6>

                <div className='flex flex-row items-center gap-12'>
                    <div className='flex flex-row items-center'>
                        <button className='bg-gray-200 py-2 px-5 rounded-lg text-orange-600 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                        <span className='py-4 px-6 rounded-lg'>{amount}</span>
                        <button className='bg-gray-200 py-2 px-4 rounded-lg text-orange-600 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                    </div>
                    <button className='bg-yellow-400 text-white font-semibold py-3 px-16 rounded-xl h-full'>Add to Cart</button>
                </div>
            </div>
        </div>


    );
}

export default ProductPage