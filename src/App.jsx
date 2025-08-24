import React from 'react'
import './index.css'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/hero'
import Products from './components/Products/products'
import ProductPage from './components/ProductPage/ProductPage'
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  
  return (
   <div>
    <Navbar/>
    <Hero/>
    <Products/>
    <ProductPage/>
    
   </div>
  )
}

export default App