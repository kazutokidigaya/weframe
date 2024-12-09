"use client";

import React, { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useActiveNav } from "@/context/ActiveNavContext";

const ProductDetails = () => {
  const { activeNav } = useActiveNav();
  const [selectedImage, setSelectedImage] = useState(
    "https://res.cloudinary.com/dqela8lj8/image/upload/v1733730336/bprguwcemzakw2lamxft.png"
  );

  const thumbnails = [
    "https://res.cloudinary.com/dqela8lj8/image/upload/v1733730335/myokgjyzgpffyoqawjzb.png",
    "https://res.cloudinary.com/dqela8lj8/image/upload/v1733730336/bprguwcemzakw2lamxft.png",
    "https://res.cloudinary.com/dqela8lj8/image/upload/v1733730335/myokgjyzgpffyoqawjzb.png",
    "https://res.cloudinary.com/dqela8lj8/image/upload/v1733730335/myokgjyzgpffyoqawjzb.png",
  ];

  return (
    <section className="w-full px-4 py-10 flex flex-col items-center justify-center">
      {/* Breadcrumb */}
      <div className="w-full text-sm font-poppins text-gray-600 flex items-center space-x-2 mb-6">
        <a href="#" className="hover:underline">
          Home
        </a>
        <span>&gt;</span>
        <a href="#" className="text-[#0093D0] font-medium hover:underline">
          {activeNav || "Art de la Table"}
        </a>
      </div>

      {/* Main Content */}
      <div className="w-full flex flex-col lg:flex-row items-center gap-8">
        {/* Image Gallery */}
        <div className="flex-1 flex flex-col lg:flex-row items-start gap-6 bg-[#F8F6F4] rounded-lg p-6">
          {/* Thumbnails */}
          <div className="flex flex-row lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4">
            {thumbnails.map((thumb, index) => (
              <div
                key={index}
                className={`p-1 border ${
                  selectedImage === thumb
                    ? "bg-white border-gray-400"
                    : "bg-[#F8F6F4] border-gray-200"
                } rounded-md cursor-pointer`}
                onClick={() => setSelectedImage(thumb)}
              >
                <img
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-8 h-8 object-cover rounded-md"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-grow flex items-center justify-center h-[500px] lg:h-[700px]">
            <img
              src={selectedImage}
              alt="Selected Product"
              className="w-full h-full max-h-[700px] object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col justify-between h-[650px] space-y-6 ">
          {/* Product Title and Price */}
          <div>
            <div className="flex items-start justify-between">
              <h1 className="text-4xl font-playfair text-gray-700">
                Cheese – appareil à raclette 1/2 roue
              </h1>
              <HeartIcon className="w-8 h-8 text-gray-500 cursor-pointer" />
            </div>
            <p className="text-2xl text-gray-600 font-poppins">
              39,50€ / pièce
            </p>

            {/* Description */}
            <hr className="border-gray-300 my-4" />
            <ul className="space-y-2 text-sm text-gray-600 font-poppins">
              <li>Régable en hauteur</li>
              <li>Appareil à raclette professionnel</li>
              <li>Boîtier de chauffe horizontal réglable en hauteur</li>
              <li>220V</li>
              <li>900W</li>
            </ul>
            <hr className="border-gray-300 my-4" />
          </div>

          {/* Quantity Selector and Button */}
          <div className="font-poppins flex flex-row items-center gap-4 w-full">
            {/* Quantity Selector */}
            <div className="flex items-center border border-gray-300 rounded-md">
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100">
                -
              </button>
              <input
                type="number"
                min="1"
                className="w-12 text-center border-none focus:ring-0"
                defaultValue="1"
              />
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100">
                +
              </button>
            </div>

            {/* Full-Width Button */}
            <button className="bg-[#5CD2DD] text-white px-6 py-2 rounded-md hover:bg-[#4cc3d0] transition w-full flex-grow text-lg ">
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>

      {/* Full Description */}
      <div className="w-full mt-10 font-poppins">
        <h2 className="text-lg font-bold  text-gray-800">
          Description produit
        </h2>
        <p className="mt-4 text-sm text-gray-600 font-poppins leading-relaxed">
          Festiv vous propose à la location un/une "Jewel – grand couteau/10pc"
          pour votre événement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour
          votre mariage, une fête d’anniversaire ou du personnel, ce produit a
          fait l’objet d’une sélection rigoureuse par notre équipe. Il est en
          location chez nous sous la référence "VAJGC". Nous sommes à votre
          disposition pour que les événements de nos clients, même en
          last-minute, soient toujours une réussite. Vous pourrez trouver tout
          une série d’outils à louer de ce type dans la catégorie "Art de la
          Table".
        </p>
      </div>
    </section>
  );
};

export default ProductDetails;
