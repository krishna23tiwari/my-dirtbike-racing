import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from './../Components/Footer';
import SocialMedia from '../Components/SocialMedia';

const SocialMediaFile = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
      <Navbar />
      <SocialMedia />
      <Footer />
    </div>
  )
}

export default SocialMediaFile
