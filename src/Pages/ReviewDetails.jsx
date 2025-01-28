import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Reviews from '../Components/Reviews'
import reviews from '../utility/reviewdata'


const ReviewDetails = () => {
  return (
   <div>
        <Navbar />
        <Reviews reviews = {reviews} />
        <Footer />
   </div>
  )
}

export default ReviewDetails
