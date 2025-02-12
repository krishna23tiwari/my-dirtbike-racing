import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProductInfo = ({ items }) => {
  const { id } = useParams();
  const product = items.find((product) => product.id === parseInt(id));
  const [counter, setCounter] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const addProduct = () => {
    if (counter < 2) {
      setCounter((prev) => prev + 1);
    } else {
      alert("You cannot add more than 2 items");
    }
  };

  const removeProduct = () => {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    } else {
      alert("You cannot remove an item as you haven't added any yet");
    }
  };

  const handleImageChange = (direction) => {
    if (direction === "left") {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
      );
    } else if (direction === "right") {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const totalPrice = (counter * product.price).toFixed(2);

  const navigate = useNavigate();

  return (
    <div className="flex w-full p-6 mt-20 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
      <div className="flex-1 max-w-xs">
        <img
          className="w-full h-[350px] object-cover rounded-lg bg-contain shadow-lg transform hover:scale-110 transition duration-300"
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="flex-1 pl-9 flex flex-col justify-between">
        <h1
          className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          style={{ fontFamily: "Bebas Neue" }}
        >
          {product.name}
        </h1>

        <div className="space-y-2 text-gray-600 mb-6">
          <p>
            <strong>Mileage (Overall):</strong> {product.mileage}
          </p>
          <p>
            <strong>Engine Type:</strong> {product.engineType}
          </p>
          <p>
            <strong>Front Brake:</strong> {product.frontBrake}
          </p>
          <p>
            <strong>Fuel Capacity:</strong> {product.fuelCapacity}
          </p>
          <p>
            <strong>Displacement:</strong> {product.displacement}
          </p>
          <p>
            <strong>No. of Cylinders:</strong> {product.noOfCylinders}
          </p>
          <p>
            <strong>Rear Brake:</strong> {product.rearBrake}
          </p>
        </div>

        <div className="mb-6">
          <p className="text-2xl font-semibold text-gray-800">
            ₹{product.price}
          </p>
          <p className="text-lg text-gray-700 mt-3 mb-5">
            {product.productdesc}
          </p>
        </div>

        <div className="w-[50vw] flex items-center justify-between mb-6">
          <button
            className="bg-pink-400 text-white text-xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-pink-600 hover:cursor-pointer transform transition duration-300"
            onClick={removeProduct}
          >
            -<i className="fas fa-minus"></i>
          </button>

          <span className="text-2xl font-semibold px-4">{counter}</span>

          <button
            className="bg-green-400 text-white text-xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-green-00 hover:cursor-pointer transform transition duration-300"
            onClick={addProduct}
          >
            +<i className="fas fa-minus"></i>
          </button>

          <p className="w-[140px] text-2xl font-semibold text-gray-800 mx-6">
            ₹{totalPrice}
          </p>

          <Link to = '/buynow' 
          state={{product}}
          className="bg-gradient-to-r from-teal-500 via-cyan-400 to-blue-500 py-3 px-6 rounded-full text-white font-semibold hover:scale-105 transform transition duration-300 flex justify-center items-center space-x-2">
            <span>Buy Now</span>
            <i className="fas fa-shopping-cart"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
