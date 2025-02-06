import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Reviews from '../Components/Reviews'
import reviews from '../utility/reviewdata'


const ReviewDetails = () => {
  return (
   <div className='flex flex-col items-center justify-center gap-4'>
        <Navbar />
        <Reviews reviews = {reviews} />
        <Footer />
   </div>
  )
}

export default ReviewDetails
