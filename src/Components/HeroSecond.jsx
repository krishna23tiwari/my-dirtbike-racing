import React, { useState } from "react";
import { Link } from "react-router-dom"; 

const HeroSecond = ({ items }) => {
  return (
    <>
      {items.map((item,index) => {
      

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
                
                  className="min-w-32 rounded-md bg-slate-800 py-2 px-4 border 
                border-transparent text-center text-sm text-white transition-all 
                shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none
                 active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none 
                 disabled:opacity-50 disabled:shadow-none"
                 
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

