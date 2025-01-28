import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ProductInfo from '../Components/ProductInfo'
import products from './../utility/data';
import { Route } from 'react-router-dom';


const ProductsDetails = () => {
  return (
    <div>
        <Navbar />
        <ProductInfo items={products} />
        <Footer />
      
    </div>
  )
}

export default ProductsDetails
