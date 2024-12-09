"use client";

import {
  MagnifyingGlassIcon,
  LightBulbIcon,
  ShoppingCartIcon,
  HeartIcon,
  ArrowDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useActiveNav } from "@/context/ActiveNavContext";

const Header = () => {
  const { activeNav, setActiveNav } = useActiveNav();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    "Art de la Table",
    "Mobilier",
    "Nappage",
    "Matériel de Salle",
    "Cuisine",
    "Barbecue",
    "Tente",
    "Chauffage",
    "Podium - Piste de Danse",
    "Son et Lumière",
    "Packs",
    "Consommables",
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm font-poppins">
      {/* Top Row */}
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
        {/* Logo */}
        <div className="flex justify-center items-center">
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src="https://res.cloudinary.com/dqela8lj8/image/upload/v1733730198/lql819r4kqfldjgzkxii.png"
                alt="WeFrameTech"
                className="h-18 w-auto" // Adjust height (e.g., h-12) and maintain aspect ratio
              />
            </a>
          </div>
          <div className="hidden md:flex w-full lg:w-[400px] mx-6 relative">
            <input
              type="text"
              placeholder="Rechercher un produit"
              className="w-full bg-gray-200 text-black rounded-md px-4 py-2 text-sm focus:outline-none"
            />
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute right-3 top-2.5" />
          </div>
        </div>

        {/* Icons */}
        <div className="hidden lg:flex items-center space-x-6 font-poppins text-sm">
          <div className="flex items-center cursor-pointer">
            <LightBulbIcon className="w-4 h-4 text-gray-600" />
            <span className="ml-2">Inspirations</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <HeartIcon className="w-4 h-4 text-gray-600" />
            <span>Mes favoris</span>
            <span className="bg-gray-200 text-xs rounded-md px-2 py-1">24</span>
          </div>
          <div className="flex items-center text-white bg-[#0093D0] rounded-md px-4 py-2 cursor-pointer">
            <ShoppingCartIcon className="w-4 h-4 text-white" />
            <span className="ml-2">Panier</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
            <span>FR</span>
            <ArrowDownIcon className="w-4 h-4 text-black" />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 rounded-md bg-gray-100 focus:outline-none"
          onClick={() => setIsMenuOpen(true)}
        >
          <Bars3Icon className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="pt-8">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-between space-x-6 py-2 overflow-x-auto">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => setActiveNav(link)}
              className={`relative text-sm font-poppins ${
                activeNav === link
                  ? "text-[#0093D0] font-medium"
                  : "text-gray-600 hover:text-[#0093D0]"
              }`}
            >
              {link}
              <span
                className={`absolute left-0 right-0 bottom-[-4px] h-[2px] bg-[#0093D0] transition-transform duration-300 ${
                  activeNav === link ? "scale-100" : "scale-0"
                }`}
              />
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white p-6 flex flex-col space-y-6">
          {/* Close Button */}
          <button
            className="self-end p-2 rounded-md bg-gray-100 focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <XMarkIcon className="w-6 h-6 text-gray-600" />
          </button>

          {/* Search Field */}
          <div className="w-full relative">
            <input
              type="text"
              placeholder="Rechercher un produit"
              className="w-full bg-gray-200 text-black rounded-md px-4 py-2 text-sm focus:outline-none"
            />
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute right-3 top-2.5" />
          </div>

          {/* Icons */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center cursor-pointer">
              <LightBulbIcon className="w-5 h-5 text-gray-600" />
              <span className="ml-2">Inspirations</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <HeartIcon className="w-5 h-5 text-gray-600" />
              <span>Mes favoris</span>
              <span className="bg-gray-200 text-xs rounded-md px-2 py-1">
                24
              </span>
            </div>
            <div className="flex max-w-[100px] items-center text-white bg-[#0093D0] rounded-md px-4 py-2 cursor-pointer">
              <ShoppingCartIcon className="w-5 h-5 text-white" />
              <span className="ml-2">Panier</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
              <span>FR</span>
              <ArrowDownIcon className="w-4 h-4 text-black" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
