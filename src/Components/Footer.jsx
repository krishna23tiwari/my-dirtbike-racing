import React, { useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll(".fade-in");
    fadeInElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("opacity-200");
      }, index * 300);
    });
  }, []);

  return (
    <footer className=" bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="fade-in opacity-0">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "Bebas Neue" }}
            >
              About Us
            </h3>
            <p className="text-gray-400">
            "At DirtRush, we live for the rush of dirtbike racing. From intense 
            trails to thrilling speed, we bring the ultimate adrenaline experience to riders everywhere."
            </p>
          </div>

          <div className="fade-in opacity-0">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "Bebas Neue" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="hover:text-gray-400"
                  style={{ fontFamily: "Bebas Neue" }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-gray-400"
                  style={{ fontFamily: "Bebas Neue" }}
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-gray-400"
                  style={{ fontFamily: "Bebas Neue" }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-gray-400"
                  style={{ fontFamily: "Bebas Neue" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="fade-in opacity-0">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "Bebas Neue" }}
            >
              Follow Us
            </h3>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-blue-700 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 fade-in opacity-0">
          <p className="text-gray-400" style={{ fontFamily: "Bebas Neue" }}>
            &copy; 2025 MySite. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
