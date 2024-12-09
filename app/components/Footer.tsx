import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-10 px-4 font-poppins">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Company Logo */}
        <div className="lg:col-span-1 flex items-start">
          <img
            src="https://res.cloudinary.com/dqela8lj8/image/upload/v1733730198/lql819r4kqfldjgzkxii.png"
            alt="Company Logo"
            className="w-32"
          />
        </div>

        {/* Links Section */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Infos Pratiques */}
          <div>
            <h3 className="text-gray-800 text-sm font-bold mb-4">
              INFOS PRATIQUES
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>À propos</li>
              <li>Livraisons & Reprises</li>
              <li>Mode d’emploi</li>
              <li>F.A.Q</li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="text-gray-800 text-sm font-bold mb-4">LÉGAL</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Mentions légales</li>
              <li>CGU</li>
              <li>CGV</li>
              <li>Politique de confidentialité</li>
            </ul>
          </div>

          {/* Mon Compte */}
          <div>
            <h3 className="text-gray-800 text-sm font-bold mb-4">MON COMPTE</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Accéder à mon compte</li>
              <li>Ma liste d’envie</li>
              <li>Créer un compte</li>
              <li>Mot de passe oublié</li>
            </ul>
          </div>
        </div>

        {/* Social Section */}
        <div className="lg:col-span-1">
          <h3 className="text-gray-800 text-sm font-bold mb-4">NOUS SUIVRE</h3>
          <div className="flex gap-4">
            <div className="p-2 border border-gray-300 rounded-md hover:bg-gray-100">
              <FaTwitter className="text-gray-600 w-5 h-5" />
            </div>
            <div className="p-2 border border-gray-300 rounded-md hover:bg-gray-100">
              <FaInstagram className="text-gray-600 w-5 h-5" />
            </div>
            <div className="p-2 border border-gray-300 rounded-md hover:bg-gray-100">
              <FaLinkedin className="text-gray-600 w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
