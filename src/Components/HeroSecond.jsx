import React, { useState } from "react";
import { Link } from "react-router-dom"; 

const HeroSecond = ({ items }) => {
  return (
    <>
      {items.map((item,index) => {
        const [counter, setCounter] = useState(0);

        const addProduct = () => {
          if (counter < 10) {
            setCounter((a) => a + 1);
          } else {
            alert("You can not add more than 10 items");
          }
        };

        const removeProduct = () => {
          if (counter > 0) {
            setCounter((a) => a - 1);
          } else {
            alert("You can not remove item as you have not added it yet");
          }
        };

        const totalPrice = (counter * item.price).toFixed(2);

        return (
          <div className="flex w-full mt-14 p-5 mb-2 hover:bg-gray-600 duration-500 rounded-2xl shadow-red-600 group" key={item.id}>
            <div className="flex-1">
              <h1
                className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
                style={{ fontFamily: "Bebas Neue" }}
              >
                {item.name}
              </h1>
              <p className="text-lg text-white mb-11 hover:text-black">
                {item.productdesc}
              </p>

              <div className="flex justify-between m-1">
              
                <Link to = {`/product-details/${item.id} `}
                
                  className="bg-gradient-to-r text-center from-orange-300 via-yellow-300 to-pink-300 p-1 rounded-xl w-28 cursor-pointer opacity-0 group-hover:opacity-100 hover:bg-green-200 hover:text-black hover:scale-110 duration-300"
                  onClick={addProduct}
                >
                  Book Now
                </Link>
              </div>
            </div>

            <div className="max-w-96 ml-6">
              <img
                className="w-full h-auto rounded-xl bg-contain shadow-lg hover:shadow-red-600 hover:duration-500 hover:scale-105 hover:cursor-pointer"
                src={item.image}
                alt={item.name}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default HeroSecond;

