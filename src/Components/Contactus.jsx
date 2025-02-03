import React from "react";
import { MdAddCall } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";

const ContactUS = () => {
  return (
//     <div className="relative">
//       <div className="flex justify-center mt-16">
//         <img
//           className="w-full h-full object-cover"
//           src="https://images.unsplash.com/photo-1688912376248-7c192a75c060?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="Background Image"
//         />
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//       </div>
    

//       <div className="absolute inset-0 flex flex-col">
//   <div className="mt-16 ml-12">
//     <p className="text-white text-4xl font-semibold pl-8 pt-4 mb-4" style={{ fontFamily: "Bebas Neue" }}>
//       CONTACT US
//     </p>
//     <p className="text-white text-2xl font-light pl-10 mb-8"> {/* Reduced margin-top to mt-2 */}
//       Products of DirtRush
//     </p>
//     <p className="text-white text-4xl font-light pl-10 pt-3 flex items-center gap-4 " style={{ fontFamily: "Bebas Neue" }}>
//     <MdAddCall />Call Us
//     </p>
//     <p className="text-white text-xl font-light pl-10 pt-3 mb-8">
//       0123456789
//     </p>
//     <p className="text-white text-4xl font-light pl-10 pt-3 flex items-center gap-4 " style={{ fontFamily: "Bebas Neue" }}>
//     <MdLocationPin />Location
//     </p>
//     <p className="text-white text-xl font-light pl-10 pt-3 mb-8">
//       123 DirtRush Street,<br></br> DirtRush City, DirtRush Country
//     </p>

//     <p className="text-white text-4xl font-light pl-10 pt-3 flex items-center gap-2 ">
//     <MdWatchLater /> Busineess Hours
//     </p>

//     <p className="text-white text-xl font-light pl-10 pt-3 mb-8">
//     Mon – Fri …… 10 am – 8 pm,<br></br> Sat, Sun ....… Closed
//     </p>
//   </div>

//   <div>
//     <div className="absolute inset-0 flex justify-center items-center">
//       <p>Email</p>
//     </div>
//   </div>
// </div>

//     </div>


<div className="relative">
<div className="flex justify-center mt-16">
  <img
    className="w-full h-full object-cover"
    src="https://images.unsplash.com/photo-1688912376248-7c192a75c060?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="Background Image"
  />
  <div className="absolute inset-0 bg-black opacity-50"></div>
</div>

<div className="absolute inset-0 flex justify-center items-start px-12 mt-16 space-x-56">
  {/* Left Section: Contact Information */}
  {/* <div className="flex flex-col space-y-8">
    
    <p className="text-white text-3xl font-semibold pl-8 pt-4 mb-3" style={{ fontFamily: 'Bebas Neue' }}>
      CONTACT US
    </p>
    <p className="text-white text-xl font-light pl-10 mb-4">Products of DirtRush</p>
    <p className="text-white text-3xl font-light pl-10 pt-3 flex items-center gap-3" style={{ fontFamily: 'Bebas Neue' }}>
      <MdAddCall /> Call Us
    </p>
    <p className="text-white text-xl font-light pl-10 pt-3 mb-8">0123456789</p>
    <p className="text-white text-4xl font-light pl-10 pt-3 flex items-center gap-4" style={{ fontFamily: 'Bebas Neue' }}>
      <MdLocationPin /> Location
    </p>
    <p className="text-white text-xl font-light pl-10 pt-3 mb-8">
      123 DirtRush Street, <br /> DirtRush City, DirtRush Country
    </p>
    <p className="text-white text-4xl font-light pl-10 pt-3 flex items-center gap-2">
      <MdWatchLater /> Business Hours
    </p>
    <p className="text-white text-xl font-light pl-10 pt-3 mb-8">
      Mon – Fri …… 10 am – 8 pm, <br /> Sat, Sun ....… Closed
    </p>
  </div> */}

  <div className="flex flex-col space-y-8">
  {/* CONTACT US Section */}
  <p className="text-white text-3xl font-semibold pl-8 pt-4 mb-3" style={{ fontFamily: 'Bebas Neue' }}>
    CONTACT US
  </p>
  <p className="text-white text-xl font-light pl-10 mb-4">Products of DirtRush</p>
  
  {/* Call Us Section */}
  <p className="text-white text-3xl font-light pl-10 pt-3 flex items-center gap-3" style={{ fontFamily: 'Bebas Neue' }}>
    <MdAddCall /> Call Us
  </p>
  <p className="text-white text-xl font-light pl-10 pt-1 mb-2">0123456789</p> {/* Reduced margin-bottom and padding-top here */}
  
  {/* Location Section */}
  <p className="text-white text-4xl font-light pl-10 pt-3 flex items-center gap-4" style={{ fontFamily: 'Bebas Neue' }}>
    <MdLocationPin /> Location
  </p>
  <p className="text-white text-xl font-light pl-10 pt-1 mb-2"> {/* Reduced margin-bottom and padding-top here */}
    123 DirtRush Street, <br /> DirtRush City, DirtRush Country
  </p>
  
  {/* Business Hours Section */}
  <p className="text-white text-4xl font-light pl-10 pt-3 flex items-center gap-2">
    <MdWatchLater /> Business Hours
  </p>
  <p className="text-white text-xl font-light pl-10 pt-1 mb-4"> {/* Reduced margin-bottom and padding-top here */}
    Mon – Fri …… 10 am – 8 pm, <br /> Sat, Sun ....… Closed
  </p>
</div>


  {/* Right Section: Contact Form */}
  <div className="flex flex-col space-y-6 w-96">
    <p className="text-white text-4xl font-semibold pl-10 pt-3" style={{ fontFamily: 'Bebas Neue' }}>
      Contact Form
    </p>
    {/* Name and Surname */}
    <div className="flex gap-4 mb-4">
      <input
        type="text"
        placeholder="First Name"
        className="pl-4 py-2 text-xl w-1/2 rounded-md"
      />
      <input
        type="text"
        placeholder="Last Name"
        className="pl-4 py-2 text-xl w-1/2 rounded-md"
      />
    </div>
    {/* Email */}
    <div className="mb-4">
      <input
        type="email"
        placeholder="Email Address"
        className="pl-4 py-2 text-xl w-full rounded-md"
      />
    </div>

    <div className="mb-4">
      <input
        type="Contact Number"
        placeholder="Contact Number"
        className="pl-4 py-2 text-xl w-full rounded-md"
      />
    </div>

    {/* Message */}
    {/* <div className="mb-4">
      <textarea
        placeholder="Your Message"
        className="pl-4 py-2 text-xl w-full rounded-md"
        rows="4"
      ></textarea>
    </div> */}

    <div className="mb-4">
  <textarea
    placeholder="Your Message"
    className="pl-4 py-2 text-xl w-full rounded-md placeholder-black focus:placeholder-white focus:outline-none text-white"
    rows="4"
  ></textarea>
</div>

    {/* Submit Button */}
    <button className="bg-blue-600 text-white text-xl py-2 px-6 rounded-md hover:bg-blue-700">
      Submit
    </button>
  </div>
</div>
</div>

  );
};

export default ContactUS;
