import React from "react";
import { MdAddCall, MdLocationPin, MdWatchLater } from "react-icons/md";

const ContactUS = () => {
  return (
    <div className="w-full min-h-screen bg-black relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1688912376248-7c192a75c060?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D"
          alt="Background"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 lg:px-20 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Contact Details */}
          <div className="text-white space-y-8 text-center md:text-left w-full md:w-1/2">
            <h2 className="text-4xl font-bold" style={{ fontFamily: "Bebas Neue" }}>
              CONTACT US
            </h2>
            <p className="text-xl font-light">Products of DirtRush</p>

            <div className="space-y-6">
              <div className="flex items-center justify-center md:justify-start gap-3 text-2xl">
                <MdAddCall />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-lg">0123456789</p>
                </div>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-3 text-2xl">
                <MdLocationPin />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-lg">
                    123 DirtRush Street, <br /> DirtRush City, DirtRush Country
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-3 text-2xl">
                <MdWatchLater />
                <div>
                  <p className="font-semibold">Business Hours</p>
                  <p className="text-lg">
                    Mon – Fri: 10 am – 8 pm <br /> Sat, Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2  p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl text-white font-semibold text-center" style={{ fontFamily: "Bebas Neue" }}>
              Contact Form
            </h2>

            <form className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-3 border border-gray-300 rounded-md placeholder-gray-300 focus:placeholder-white focus:outline-none text-white focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-3 border border-gray-300 rounded-md  placeholder-gray-300 focus:placeholder-white focus:outline-none text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="p-3 w-full border border-gray-300  placeholder-gray-300 focus:placeholder-white focus:outline-none text-white rounded-md focus:outline-none focus:border-blue-500"
              />

              <input
                type="text"
                placeholder="Contact Number"
                className="p-3 w-full border border-gray-300  placeholder-gray-300 focus:placeholder-white focus:outline-none text-white rounded-md focus:outline-none focus:border-blue-500"
              />

              <textarea
                placeholder="Your Message"
                className="p-3 w-full border border-gray-300 rounded-md  placeholder-gray-300 focus:placeholder-white focus:outline-none text-white focus:outline-none focus:border-blue-500"
                rows="4"
              ></textarea>

              <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
