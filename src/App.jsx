import React from 'react'
import Homepage from './Pages/Homepage'
import ProductsPage from './Pages/ProductsPage'
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom'
import ProductsDetails from './Pages/ProductsDetails'
import ScrollToTop from './Validation/ScrollToTop'
import ReviewDetails from './Pages/ReviewDetails' 
import Contact from './Pages/Contact'
import AreYouReadyP from './Pages/AreYouReadyP'

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
       <Route path='/' element={<Homepage />} />
       <Route path='/products' element={<ProductsPage />} />
       <Route path='/product-details/:id' element={<ProductsDetails />} />
       <Route path='/product-review' element={<ReviewDetails />} />
       <Route path='/product-contactus' element={<Contact />} />
       <Route path='/ruready' element={<AreYouReadyP />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
