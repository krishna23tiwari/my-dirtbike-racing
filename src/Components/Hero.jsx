import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="flex w-full items-center justify-between h-screen mt-2">
        <div
          className="relative w-1/2 h-full bg-cover rounded-lg bg-center group hover:opacity-75 transition-all hover:scale-95 hover:duration-500 hover:rounded-2xl cursor-pointer"
          style={{
            backgroundImage:
              "url(https://dirtbikemagazine.com/wp-content/uploads/2023/06/CR300Photos-Dirt-Bike-Magazine-Travis-Fant.jpg)",
          }}
        >
          <div className="absolute bottom-0 inset-x-0 bg-black bg-opacity-70 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 p-6">
            <p className="text-xl font-semibold text-center bg-gradient-to-r from-gray-800 via-red-700 to-purple-800 bg-clip-text text-transparent shadow-lg shadow-black">
              "Feel the speed, hear the roar, conquer the wild. Ride like never
              before, chase the adventure, and leave the trail behind."
            </p>
          </div>
        </div>

        <div className="w-1/2 h-full flex flex-col justify-center p-12 bg-gray-800 text-white rounded-2xl shadow-lg">
          <h1
            className="text-5xl font-extrabold sm:mt-18 mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text md:text-6xl"
            style={{ fontFamily: "Bebas Neue" }}
          >
            Ride Wild. Conquer Every Terrain
          </h1>
          <p className="text-lg mb-6 leading-relaxed opacity-80">
            "Unleash your inner adventurer with bikes built for any challenge.
            Dominate dirt, mud, and rocky paths with power, precision, and
            unstoppable performance."
          </p>
          <button className="mt-6 py-3 px-8 bg-gradient-to-r hover:cursor-pointer from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            Are You Ready to Ride?
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
