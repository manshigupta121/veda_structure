import React from 'react'
import './index.css'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/hero'
import Products from './components/Products/products'
import ProductPage from './components/ProductPage/ProductPage'
import AOS from "aos";
import "aos/dist/aos.css";
import Accordion from './components/Accordion/Accordion'
import Footer from './components/Footer/Footer'
import Collapsible from './components/Collapsible/Collapsible'
import CollapsibleSection from './components/Collapsible/Collapsible'

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
    <Accordion/>
    <Products/>
    <ProductPage/>
    <CollapsibleSection/>
    <Footer />
   </div>
  )
}

export default App