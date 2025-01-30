import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import ContactUS from './Contactus';

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
          <Link to="/"> DirtRush</Link>
        </div>

        <button className="md:hidden text-white" onClick={toggleMenu}>
          <i className="fas fa-bars text-white" />
        </button>

        <div className="flex md:hidden text-white">
          <button onClick={toggleMenu} className="text-white">
            <RxHamburgerMenu />
          </button>

          <div className={`absolute top-10 right-0 w-[30vw] h-[100vh] ${ isOpen ? 'flex' : 'hidden'} bg-gray-800 flex flex-col items-center justify-center`}>
            <div>Home</div>
            <div>Products</div>
            <div>Reviews</div>
            <div>Contact Us</div>
          </div>
        </div>

        <div className="md:flex space-x-6 hidden">
          <Link
            to="/"
            href="#dashboard"
            className="nav-item text-white relative group"
            style={{ fontFamily: "Bebas Neue" }}
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/products"
            href="#address-book"
            className="nav-item text-white relative group"
            style={{ fontFamily: "Bebas Neue" }}
          >
            <i className="far fa-address-book mr-2" />
            Products
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/product-review"
            href="#components"
            className="nav-item text-white relative group"
            style={{ fontFamily: "Bebas Neue" }}
          >
            <i className="far fa-clone mr-2" />
            Reviews
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/product-contactus"
            href="#calendar"
            className="nav-item text-white relative group"
            style={{ fontFamily: "Bebas Neue" }}
          >
            <i className="far fa-calendar-alt mr-2" />
            Contact Us
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>
      </div>

     
    </nav>
  );
};

export default Navbar;
