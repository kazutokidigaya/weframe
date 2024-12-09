"use client";

import React, { useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const SimilarProducts = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const scrollLeft = () => {
    document
      .getElementById("scroll-container")
      ?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    document
      .getElementById("scroll-container")
      ?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const products = new Array(10).fill({
    image:
      "https://res.cloudinary.com/dqela8lj8/image/upload/v1733730335/myokgjyzgpffyoqawjzb.png",
    title: "Title",
    price: "0€",
    pricePerPiece: "0,35€/Pièce",
    reference: "VABGN5",
    quantity: "20 pièces",
  });

  return (
    <section className="w-full font-poppins bg-[#FBF9F899] py-10 px-4">
      {/* Heading */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-poppins text-gray-800">
          Articles similaires
        </h2>
        <a href="#" className="text-sm font-poppins text-gray-600 underline">
          Voir toute la collection
        </a>
      </div>

      {/* Scrollable Cards */}
      <div className="relative">
        {/* Scroll Buttons */}
        <button
          className="absolute left-5 lg:left-0 top-1/2 transform -translate-y-1/2 bg-[#5CD2DD] p-2 rounded-md text-white z-10"
          onClick={scrollLeft}
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        <button
          className="absolute right-5 lg:right-0 top-1/2 transform -translate-y-1/2 bg-[#5CD2DD] p-2 rounded-md text-white z-10"
          onClick={scrollRight}
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>

        {/* Card Container */}
        <div
          id="scroll-container"
          className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-hide pb-4"
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[320px] lg:w-[380px] h-auto bg-white rounded-lg shadow-md p-4 transition-transform transform hover:-translate-y-1 hover:shadow-lg"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Header */}
              <div className="flex justify-between items-center mb-2">
                <HeartIcon className="w-5 h-5 text-gray-400 cursor-pointer" />
                <div className="bg-white text-gray-700 text-xs px-2 py-1 rounded-md ">
                  Art de la Table
                </div>
              </div>

              {/* Product Image */}
              <div className="bg-[#F9F7F5] p-4 rounded-lg relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-contain rounded-md"
                />
              </div>

              {/* Quantity Selector (Visible on Hover) */}
              {hoveredCard === index && (
                <div className="absolute left-0 right-0 bottom-16 bg-white p-3 flex items-center justify-between gap-4 border-t border-gray-200">
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button className="px-2 py-1 text-gray-600 hover:bg-gray-100">
                      -
                    </button>
                    <input
                      type="number"
                      defaultValue="1"
                      className="w-10 text-center border-none focus:ring-0"
                    />
                    <button className="px-2 py-1 text-gray-600 hover:bg-gray-100">
                      +
                    </button>
                  </div>
                  <button className="bg-pink-500 text-white text-sm px-4 py-2 rounded-md w-full">
                    Ajouter
                  </button>
                </div>
              )}

              {/* Product Details */}
              <div className="mt-4 text-sm">
                <h3 className="font-poppins font-medium text-gray-800">
                  {product.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{product.price}</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-md">
                    {product.quantity}
                  </span>
                </div>
                <p className="text-xs text-gray-400">
                  {product.pricePerPiece} · Réf: {product.reference}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarProducts;
