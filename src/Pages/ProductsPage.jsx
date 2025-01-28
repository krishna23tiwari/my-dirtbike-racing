import React from 'react'
import HeroSecond from '../Components/HeroSecond'
import products from '../utility/data'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const ProductsPage = () => {
  return (
    <div className='bg-gray-900'>
      <Navbar />
      <HeroSecond items = {products}/>
      <Footer />
    </div>
  )
}

export default ProductsPage
