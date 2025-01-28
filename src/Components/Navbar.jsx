import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 shadow-lg fixed top-0 inset-x-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div
          className=" text-2xl font-semibold text-white"
          style={{ fontFamily: "Bebas Neue" }}
        >
          
          <Link to = '/'> DirtRush</Link>
        </div>

        <button className="md:hidden text-white" onClick={toggleMenu}>
          <i className="fas fa-bars text-white" />
        </button>

        <div className={`md:flex space-x-6 ${isOpen ? "block" : "hidden"}`}>
          <Link to = '/'
            href="#dashboard"
            className="nav-item text-white relative group"
            style={{ fontFamily: "Bebas Neue" }}
          >
            <i className="fas fa-tachometer-alt mr-2" />
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to = '/products'
            href="#address-book"
            className="nav-item text-white relative group"
            style={{ fontFamily: "Bebas Neue" }}
          >
            <i className="far fa-address-book mr-2" />
            Products
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to = '/product-review'
            href="#components"
            className="nav-item text-white relative group"
            style={{ fontFamily: "Bebas Neue" }}
          >
            <i className="far fa-clone mr-2" />
            Reviews
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
          <a
            href="#calendar"
            className="nav-item text-white relative group"
            style={{ fontFamily: "Bebas Neue" }}
          >
            <i className="far fa-calendar-alt mr-2" />
            Contact Us
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-600">
          <a href="#dashboard" className="block text-white px-4 py-2">
            Dashboard
          </a>
          <a href="#address-book" className="block text-white px-4 py-2">
            Address Book
          </a>
          <a href="#components" className="block text-white px-4 py-2">
            Components
          </a>
          <a href="#calendar" className="block text-white px-4 py-2">
            Calendar
          </a>
          <a href="#charts" className="block text-white px-4 py-2">
            Charts
          </a>
          <a href="#documents" className="block text-white px-4 py-2">
            Documents
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
