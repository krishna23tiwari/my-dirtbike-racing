// import React from 'react';
// import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover, FaGooglePay, FaApplePay } from 'react-icons/fa';
// import { SiPhonepe, SiPaytm } from 'react-icons/si';

// const BuyNow = () => {
//   return (
//     <div className="h-full w-full bg-gray-100 p-8 flex justify-center items-center mt-16">
//       <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-2xl flex">
//         {/* Left Section - Card Payment Options */}
//         <div className="w-1/2 pr-4 border-r">
//           <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Choose Payment Method</h1>
//           <div className="space-y-4">
//             <div className="flex items-center space-x-3">
//               <FaCcVisa size={40} className="text-blue-600 hover:cursor-pointer" />
//               <FaCcMastercard size={40} className="text-red-600 hover:cursor-pointer" />
//               <FaCcAmex size={40} className="text-indigo-600 hover:cursor-pointer" />
//               <FaCcDiscover size={40} className="text-yellow-600 hover:cursor-pointer" />
//             </div>
//             <div className="bg-gray-200 p-4 rounded-lg">
//               <h2 className="text-xl font-semibold text-gray-700 mb-2">Enter Card Details</h2>
//               <input type="text" placeholder="Card Number" className="w-full p-2 mb-3 border rounded-md" />
//               <input type="text" placeholder="Card Holder Name" className="w-full p-2 mb-3 border rounded-md" />
//               <div className="flex gap-2">
//                 <input type="text" placeholder="MM/YY" className="w-1/2 p-2 border rounded-md" />
//                 <input type="text" placeholder="CVV" className="w-1/2 p-2 border rounded-md" />
//               </div>
//               <button className="mt-4 w-full hover:cursor-pointer bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-800">
//                 Pay Now
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Right Section - Online Payment Options */}
//         <div className="w-1/2 pl-4 flex flex-col items-center space-y-4">
//           <SiPhonepe size={50} className="text-blue-500 hover:cursor-pointer" />
//           <SiPaytm size={50} className="text-purple-500 hover:cursor-pointer" />
//           <FaGooglePay size={50} className="text-green-500 hover:cursor-pointer" />
//           <FaApplePay size={50} className="text-black hover:cursor-pointer" />
//           <button className="mt-4 hover:cursor-pointer bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-900">
//             Pay with UPI
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyNow;


import React from 'react';
import { 
  FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover, FaGooglePay, 
  FaApplePay, FaCcJcb, FaCcDinersClub 
} from 'react-icons/fa';
import { 
  SiPhonepe, SiPaytm, SiAmazonpay, SiSamsungpay 
} from 'react-icons/si';

const BuyNow = () => {
  return (
    <div className="h-screen w-full bg-gray-100 flex justify-center items-center p-10 mt-16">
      <div className="bg-white p-10 shadow-lg rounded-lg w-full max-w-5xl flex">
        
        {/* Left Section - Card Payment Options */}
        <div className="w-1/2 pr-8 border-r">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Choose Payment Method</h1>
          <div className="space-y-6">
            
            {/* Card Payment Icons */}
            <div className="flex items-center justify-center space-x-4">
              <FaCcVisa size={50} className="text-blue-600 hover:cursor-pointer" />
              <FaCcMastercard size={50} className="text-red-600 hover:cursor-pointer" />
              <FaCcAmex size={50} className="text-indigo-600 hover:cursor-pointer" />
              <FaCcDiscover size={50} className="text-yellow-600 hover:cursor-pointer" />
              <FaCcJcb size={50} className="text-green-600 hover:cursor-pointer" />
              <FaCcDinersClub size={50} className="text-gray-600 hover:cursor-pointer" />
            </div>
            
            {/* Card Details Form */}
            <div className="bg-gray-200 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-700 mb-3">Enter Card Details</h2>
              <input type="text" placeholder="Card Number" className="w-full p-3 mb-4 border rounded-md" />
              <input type="text" placeholder="Card Holder Name" className="w-full p-3 mb-4 border rounded-md" />
              <div className="flex gap-3">
                <input type="text" placeholder="MM/YY" className="w-1/2 p-3 border rounded-md" />
                <input type="text" placeholder="CVV" className="w-1/2 p-3 border rounded-md" />
              </div>
              <button className="mt-6 w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-800 hover:cursor-pointer text-lg">
                Pay Now
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Online Payment Options */}
        <div className="w-1/2 pl-8 flex flex-col items-center space-y-6">
          
          {/* UPI & Digital Wallet Icons */}
          <div className="flex flex-wrap justify-center gap-6">
            <SiPhonepe size={60} className="text-blue-500 hover:cursor-pointer" />
            <SiPaytm size={60} className="text-purple-500 hover:cursor-pointer" />
            <FaGooglePay size={60} className="text-green-500 hover:cursor-pointer" />
            <FaApplePay size={60} className="text-black hover:cursor-pointer" />
            <SiAmazonpay size={60} className="text-yellow-500 hover:cursor-pointer" />
            <SiSamsungpay size={60} className="text-blue-700 hover:cursor-pointer" />
          </div>

          {/* Pay with UPI Button */}
          <button className="mt-6 bg-gray-700 text-white px-8 py-4 rounded-lg hover:bg-gray-900 hover:cursor-pointer text-lg">
            Pay with UPI
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
