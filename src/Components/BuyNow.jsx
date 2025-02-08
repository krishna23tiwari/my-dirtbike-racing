import React from 'react';
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover, FaGooglePay, FaApplePay, FaCcJcb, FaCcDinersClub } from 'react-icons/fa';
import { SiPhonepe, SiPaytm, SiAmazonpay, SiSamsungpay } from 'react-icons/si';

const BuyNow = () => {
  return (
    <div className="min-h-screen w-full bg-gray-400 flex justify-center items-center p-6 sm:p-10 mt-16">
      <div className="bg-gray-300 p-6 sm:p-10 shadow-lg rounded-lg w-full max-w-5xl flex flex-col md:flex-row gap-8">
        
        
        <div className="w-full md:w-1/2 border-b md:border-r md:border-b-0 pb-6 md:pb-0 md:pr-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">
            Choose Payment Method
          </h1>

          {/* Card Payment Icons */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <FaCcVisa size={50} className="text-blue-600 hover:scale-110 transition" />
            <FaCcMastercard size={50} className="text-red-600 hover:scale-110 transition" />
            <FaCcAmex size={50} className="text-indigo-600 hover:scale-110 transition" />
            <FaCcDiscover size={50} className="text-yellow-600 hover:scale-110 transition" />
            <FaCcJcb size={50} className="text-green-600 hover:scale-110 transition" />
            <FaCcDinersClub size={50} className="text-gray-600 hover:scale-110 transition" />
          </div>

          {/* Card Details Form */}
          <div className="bg-gray-200 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Enter Card Details
            </h2>
            <input type="text" placeholder="Card Number" className="w-full p-3 mb-4 border rounded-md" />
            <input type="text" placeholder="Card Holder Name" className="w-full p-3 mb-4 border rounded-md" />
            <div className="flex gap-3">
              <input type="text" placeholder="MM/YY" className="w-1/2 p-3 border rounded-md" />
              <input type="text" placeholder="CVV" className="w-1/2 p-3 border rounded-md" />
            </div>
            <button className="mt-6 w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition text-lg">
              Pay Now
            </button>
          </div>
        </div>

        {/* UPI & Wallet Payment Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Pay with UPI / Wallet
          </h2>

          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <SiPhonepe size={70} className="text-blue-500 hover:scale-110 transition" />
            <SiPaytm size={70} className="text-purple-500 hover:scale-110 transition" />
            <FaGooglePay size={70} className="text-green-500 hover:scale-110 transition" />
            <FaApplePay size={70} className="text-black hover:scale-110 transition" />
            <SiAmazonpay size={70} className="text-yellow-500 hover:scale-110 transition" />
            <SiSamsungpay size={70} className="text-blue-700 hover:scale-110 transition" />
          </div>

          <button className="mt-4 bg-gray-700 text-white px-8 py-4 rounded-lg hover:bg-gray-900 transition text-lg">
            Pay with UPI
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
