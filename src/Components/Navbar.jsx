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
          <Link to="/"> DirtRush</Link>
        </div>

        <button className="md:hidden text-white" onClick={toggleMenu}>
          <i className="fas fa-bars text-white" />
        </button>

        <div className="flex md:hidden mr-4 text-white ">
          <button onClick={toggleMenu} className="text-white text-2xl hover:cursor-pointer">
            <RxHamburgerMenu />
          </button>
          {isOpen && (
            <div className="absolute top-16 hover:cursor-auto right-1 w-44 h-50 rounded-b-xl translate-y-px bg-gray- flex flex-col items-center justify-center space-y-6">
              <Link
                to="/"
                className="text-white text-xl"
                onClick={toggleMenu} 
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-white text-xl"
                onClick={toggleMenu}
              >
                Products
              </Link>
              <Link
                to="/product-review"
                className="text-white text-xl"
                onClick={toggleMenu}
              >
                Reviews
              </Link>
              <Link
                to="/product-contactus"
                className="text-white text-xl"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </div>
          )}
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
