"use client";

import React from "react";

const GradientSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#fff5fa] to-[#FFFFFF] py-10 font-poppins">
      {/* Heading */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
          On s'occupe de <span className="text-[#5CD2DD]">tout</span>
        </h2>
        <p className="text-gray-600 mt-4">
          Office ipsum you must be muted. It meeting commitment busy pain.
        </p>
      </div>

      <div className="w-full lg:flex grid grid-cols-2 lg:flex-row justify-center items-center  gap-8">
        <div className="flex flex-col lg:flex-row items-center ">
          <div className="relative flex flex-col items-center text-center gap-2 w-28 lg:w-[150px] z-10">
            {/* Icon */}
            <img
              src="https://res.cloudinary.com/dqela8lj8/image/upload/v1733730198/zgyt3odjnjohgmtk1qeh.png"
              alt="Livraison & Reprise"
              className="w-12 h-11"
            />
            {/* Title */}
            <h3 className="text-gray-800 text-xs lg:text-sm font-medium">
              Livraison & Reprise
            </h3>
            {/* Subtitle */}
            <p className="text-gray-600 text-[10px] lg:text-xs">
              Selon vos besoins
            </p>
          </div>
          {/* HR Line */}
          <div className="hidden lg:block h-[1px] w-16 bg-gray-300"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center">
          <div className="relative flex flex-col items-center text-center gap-2 w-28 lg:w-[150px] z-10">
            {/* Icon */}
            <img
              src="https://res.cloudinary.com/dqela8lj8/image/upload/v1733730198/qi9su9luimlvev4zu3mz.png"
              alt="Nettoyage"
              className="w-12 h-11"
            />
            {/* Title */}
            <h3 className="text-gray-800 text-xs lg:text-sm font-medium">
              Nettoyage
            </h3>
            {/* Subtitle */}
            <p className="text-gray-600 text-[10px] lg:text-xs">
              Selon vos besoins
            </p>
          </div>
          {/* HR Line */}
          <div className="hidden lg:block h-[1px] w-16 bg-gray-300"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center">
          <div className="relative flex flex-col items-center text-center gap-2 w-28 lg:w-[150px] z-10">
            {/* Icon */}
            <img
              src="https://res.cloudinary.com/dqela8lj8/image/upload/v1733730198/ztladzqf9xi8ai5wbfvj.png"
              alt="Commande Illimitée"
              className="w-12 h-11"
            />
            {/* Title */}
            <h3 className="text-gray-800 text-xs lg:text-sm font-medium">
              Commande Illimitée
            </h3>
            {/* Subtitle */}
            <p className="text-gray-600 text-[10px] lg:text-xs">
              Tout est possible
            </p>
          </div>
          {/* HR Line */}
          <div className="hidden lg:block h-[1px] w-16 bg-gray-300"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center">
          <div className="relative flex flex-col items-center text-center gap-2 w-28 lg:w-[150px] z-10">
            {/* Icon */}
            <img
              src="https://res.cloudinary.com/dqela8lj8/image/upload/v1733730198/cr589odzs7z7rrkr9qts.png"
              alt="Transport & Enlèvement"
              className="w-12 h-11"
            />
            {/* Title */}
            <h3 className="text-gray-800 text-xs lg:text-sm font-medium">
              Transport & Enlèvement
            </h3>
            {/* Subtitle */}
            <p className="text-gray-600 text-[10px] lg:text-xs">
              On s'occupe de tout.
            </p>
          </div>
        </div>
      </div>

      {/* Image and Signup Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center mt-20 gap-4 px-4">
        {/* Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/dqela8lj8/image/upload/v1733730198/ncqunnmssmuqae1wi1tg.png"
            alt="S'inscrire & économiser"
            className="rounded-md object-cover"
          />
        </div>

        {/* Signup Box */}
        <div className="flex-1 bg-[#FFF3F9] rounded-lg p-8 flex flex-col justify-between   lg:min-h-[300px] min-h-[250px]">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
              S'inscrire & économiser{" "}
              <span className="text-[#5CD2DD]">10%</span>
            </h3>
            <p className="text-sm text-[#BDA2B0] mt-4">
              Office ipsum you must be muted. Synergize helicopter prioritize
              anyway job due harvest most opportunity didn't.
            </p>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="john@doe.com"
              className="flex-grow border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#f362aa] min-w-[260px]"
            />
            <button className="bg-[#5CD2DD] text-white px-6 py-3 rounded-md">
              S'INSCRIRE →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GradientSection;
