import React from 'react'

const Reviews = () => {
  return (
    <div className='h-full bg-gray-600 p-4'>
    {/* Add some simple content to test visibility */}
    <h2 className="text-white text-3xl">Product Reviews</h2>
    <div className="mt-4">
      <div className="bg-white p-4 mb-4 rounded-lg shadow-lg">
        <h3 className="font-bold text-xl">User 1</h3>
        <p className="text-gray-700">Rating: ⭐⭐⭐⭐</p>
        <p className="text-gray-600">Great product! Highly recommend.</p>
      </div>
      <div className="bg-white p-4 mb-4 rounded-lg shadow-lg">
        <h3 className="font-bold text-xl">User 2</h3>
        <p className="text-gray-700">Rating: ⭐⭐⭐</p>
        <p className="text-gray-600">Good, but could use some improvements.</p>
      </div>
    </div>
  </div>
  )
}

export default Reviews
