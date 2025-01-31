// import React from 'react';


import { faEnvelope, faHeart, faQuestionCircle, faSearch, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className="bg-gray-100 border-b border-gray-300">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://imgcms.1stoplighting.com/site/theme/www_1stoplighting_com/1stop_logo.png"
            alt="Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Search Box */}
        <div className="flex-1 px-4">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-md p-2 pl-10 focus:ring focus:ring-orange-300 focus:outline-none"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size="lg"
            />
          </div>
        </div>

        {/* Navigation Items */}
        <ul className="flex space-x-6 text-gray-700">
          <li className="hover:text-orange-500">
            <a href="#" className="flex items-center">
              {/* <i className="far fa-envelope"></i> */}
              <FontAwesomeIcon icon={faEnvelope} />
              Save Up to 25%
            </a>
          </li>
          <li className="hover:text-orange-500">
            <a href="#" className="flex items-center">
              {/*  <i className="fal fa-question-circle"></i> */}
              <FontAwesomeIcon icon={faQuestionCircle} />
              Support
            </a>
          </li>
          <li className="hover:text-orange-500">
            <a href="#" className="flex items-center">
              <i className="fal fa-user"></i>
              <FontAwesomeIcon icon={faUser} />
              Account
            </a>
          </li>
          <li className="hover:text-orange-500">
            <a href="#" className="flex items-center">
              {/*   <i className="fas fa-heart"></i> */}
              <FontAwesomeIcon icon={faHeart} />
              Favorites
            </a>
          </li>
          <li className="hover:text-orange-500">
            <a href="#" className="flex items-center">
              {/*  <i className="fal fa-shopping-cart"></i> */}
              <FontAwesomeIcon icon={faShoppingCart} />
              Cart
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
