import React from "react";
import { MdAddCall } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";

const ContactUS = () => {
  return (
    <div className="w-[100vw] h-[100vh] relative">
      <div className="flex justify-center mt-16">
        <img
          className="w-[100vw] h-[100vh] object-cover"
          src="https://images.unsplash.com/photo-1688912376248-7c192a75c060?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background Image"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="absolute inset-0 flex justify-center items-start px-12 mt-16 space-x-56">
        <div className="flex flex-col space-y-8">
          <p
            className="text-white text-3xl font-semibold pl-8 pt-4 mb-3"
            style={{ fontFamily: "Bebas Neue" }}
          >
            CONTACT US
          </p>
          <p className="text-white text-xl font-light pl-10 mb-4">
            Products of DirtRush
          </p>
          <div>
          <p
            className="text-white text-3xl font-light pl-10 pt-3 flex items-center gap-3"
            style={{ fontFamily: "Bebas Neue" }}
          >
            <MdAddCall /> Call Us
          </p>
          <p className="text-white text-xl font-light pl-10 pt-1 mt-2">
            0123456789
          </p>
          </div>
          
          <div>
          <p
            className="text-white text-4xl font-light pl-10 pt-3 flex items-center gap-4"
            style={{ fontFamily: "Bebas Neue" }}
          >
            <MdLocationPin /> Location
          </p>
          <p className="text-white text-xl font-light pl-10 pt-1 mb-2">
            {" "}
          
            123 DirtRush Street, <br /> DirtRush City, DirtRush Country
          </p>
          </div>

          <div>
          <p className="text-white text-4xl font-light pl-10 pt-3 flex items-center gap-2">
            <MdWatchLater /> Business Hours
          </p>
          <p className="text-white text-xl font-light pl-10 pt-1 mb-4">
            {" "}
            
            Mon – Fri …… 10 am – 8 pm, <br /> Sat, Sun ....… Closed
          </p>
          </div>
        </div>

        <div className="flex flex-col space-y-6 w-96">
          <p
            className="text-white text-4xl font-semibold pl-10 pt-3"
            style={{ fontFamily: "Bebas Neue" }}
          >
            Contact Form
          </p>

          <div className="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="pl-4 py-2 text-xl border border-gray-400 w-1/2 rounded-md placeholder-gray-300 focus:placeholder-white focus:outline-none text-white"
            />

            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
            <input
              type="text"
              placeholder="Last Name"
              className="pl-4 py-2 text-xl w-1/2 rounded-md border border-gray-400 placeholder-gray-300 focus:placeholder-white focus:outline-none text-white"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email Address"
              className="pl-4 py-2 text-xl w-full rounded-md border border-gray-400 placeholder-gray-300 focus:placeholder-white focus:outline-none text-white"
            />
          </div>

          <div className="mb-4">
            <input
              type="Contact Number"
              placeholder="Contact Number"
              className="pl-4 py-2 text-xl w-full rounded-md border border-gray-400 placeholder-gray-300 focus:placeholder-white focus:outline-none text-white"
            />
          </div>

          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              className="pl-4 py-2 text-xl w-full rounded-md border border-gray-400 placeholder-gray-300 focus:placeholder-white focus:outline-none text-white mb-11"
              rows="4"
            ></textarea>
          </div>

          <button className="bg-blue-600 text-white text-xl py-2 px-6 rounded-md hover:bg-blue-700">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
