import React from 'react'
import productsdata from '../utility/Ruready'
import { Link } from 'react-router-dom'


const AreYouReady = () => {
  return (
    <div className="h-full w-full bg-gray-200 p-8 mt-14">
    {/* Introductory Section */}
    <div className="text-center mb-10">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to DirtBike Haven</h1>
      <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
        Whether you're a pro rider or just starting your off-road journey, we've got the perfect dirt bike accessories for you. Explore our collection and experience the thrill of the ride!
      </p>
    </div>

    {/* Product List */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {productsdata.map((product) => (
        <div
          key={product.id}
          className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-40 h-40 object-cover rounded-md"
          />
          <h2 className="text-xl font-bold mt-4 text-gray-800">{product.name}</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-lg font-semibold text-gray-900 mt-2">{product.price}</p>
          <Link to = '/buynow' 
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex gap-6 justify-center"
            >
            Buy Now
          </Link>
        </div>
      ))}
    </div>
  </div>
  )
}

export default AreYouReady
