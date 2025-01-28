import React from 'react'
import '../Components/FormImage.css'

const Form = () => {
  return (
    <div id='formbg'
    className="max-w-lvh mx-auto p-6 bg-cover bg-center rounded-lg shadow-lg hover:opacity-80" 
    
  >
    <h2 className="text-3xl font-semibold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-6" style={{ fontFamily: "Bebas Neue" }}>
      For Inquiry
    </h2>
    <form className="space-y-4 ">
      <div>
        <label htmlFor="name" className="block text-white font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder="Enter your name"
          required
        />
      </div>
  
      <div>
        <label htmlFor="email" className="block text-white font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder="Enter your email"
          required
        />
      </div>
  
      <div>
        <label htmlFor="contact" className="block text-white font-medium">
          Contact Number
        </label>
        <input
          type="tel"
          id="contact"
          name="contact"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder="Enter your contact number"
          required
        />
      </div>
  
      <div className="flex justify-center hover:scale-105">
        <button
          type="submit"
          className="px-8 py-3 bg-gradient-to-r from-orange-300 via-yellow-300 to-pink-300 text-white font-semibold rounded-lg focus:outline-none hover:cursor-pointer"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
  
  )
}

export default Form
