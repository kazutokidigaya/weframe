"use client";

import React, { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";

const InterestedProducts = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const products = new Array(3).fill({
    image:
      "https://res.cloudinary.com/dqela8lj8/image/upload/v1733730335/myokgjyzgpffyoqawjzb.png",
    title: "Title",
    price: "0€",
    pricePerPiece: "0,35€/Pièce",
    reference: "VABGN5",
    quantity: "20 pièces",
  });

  return (
    <section className="w-full bg-white py-10 px-4 font-poppins">
      {/* Heading */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Ces produits pourraient vous intéresser
        </h2>
        <a href="#" className="text-sm text-gray-600 underline">
          Voir toute la collection
        </a>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            className="relative bg-white rounded-lg shadow-md p-4 transition-transform transform hover:-translate-y-1 hover:shadow-lg overflow-hidden"
          >
            {/* Product Image */}
            <div className="bg-[#F9F7F5] p-4 rounded-lg relative">
              {/* Header */}
              <div className="absolute top-3 left-3">
                <HeartIcon className="w-5 h-5 text-gray-400 cursor-pointer" />
              </div>
              <div className="absolute top-3 right-3 bg-[#F9F7F5] text-gray-700 text-xs px-2 py-1 rounded-md">
                Art de la Table
              </div>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 sm:h-48 object-contain rounded-md"
              />
            </div>

            {/* Quantity Selector (Visible on Hover) */}
            {hoveredCard === index && (
              <div className="absolute top-40 sm:top-48 left-0 w-full bg-white p-4 flex flex-col gap-4 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button className="px-2 py-1 text-gray-600 hover:bg-gray-100">
                      -
                    </button>
                    <input
                      type="number"
                      defaultValue="1"
                      className="w-12 text-center border-none focus:ring-0"
                    />
                    <button className="px-2 py-1 text-gray-600 hover:bg-gray-100">
                      +
                    </button>
                  </div>
                  <button className="bg-pink-500 text-white text-sm px-6 py-2 rounded-md flex-grow">
                    Ajouter
                  </button>
                </div>
              </div>
            )}

            {/* Product Details */}
            <div className="mt-6">
              <h3 className="font-medium text-gray-800">{product.title}</h3>
              <div className="flex items-center justify-between mt-2">
                <span className="text-gray-600">{product.price}</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-md">
                  {product.quantity}
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                {product.pricePerPiece} · Réf: {product.reference}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InterestedProducts;
