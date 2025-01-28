import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import HeroSecond from '../Components/HeroSecond'
import Form from '../Components/Form'
import Footer from '../Components/Footer'
import products from '../utility/data'

const Homepage = () => {
  return (
    <div className='bg-gray-900'>
    <Navbar />
    <Hero />
    <HeroSecond items={products} />
    <Form />
    <Footer />
  </div>
  )
}

export default Homepage
