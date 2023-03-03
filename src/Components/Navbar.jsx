import React from "react";
import { useState, useEffect } from "react";
import DropDown from "./DropDown";
import logo from "../assets/logo.png";
import { dropDowntypes } from "./NavBarData";

const Navbar = () => {
  let [items, setItems] = useState([]);

  return (
    <>
      <header className="bg-blend-screen shadow-md">
        <div
          className="container mx-auto px-4"
          onMouseLeave={() => setItems(() => [])}
        >
          <nav className="flex items-center py-4">
            <div>
              <img
                src={logo}
                alt="Company Logo"
                className="h-16 cursor-pointer"
              />
            </div>
            <div>
              <ul className="flex items-center ml-6">
                <li
                  className="mx-8 text-gray-600 hover:text-blue-500 cursor-pointer"
                  onMouseEnter={() => setItems(() => dropDowntypes.insights)}
                >
                  Insights
                </li>
                <li
                  className="mx-8 text-gray-600 hover:text-blue-500 cursor-pointer"
                  onMouseEnter={() => setItems(() => dropDowntypes.industries)}
                >
                  Industries
                </li>
                <li
                  className="mx-8 text-gray-600 hover:text-blue-500 cursor-pointer"
                  onMouseEnter={() => setItems(() => dropDowntypes.services)}
                >
                  Services
                </li>
                <li
                  className="mx-8 text-gray-600 hover:text-blue-500 cursor-pointer"
                  onMouseEnter={() => setItems(() => dropDowntypes.careers)}
                >
                  Careers
                </li>
                <li
                  className="mx-8 text-gray-600 hover:text-blue-500 cursor-pointer"
                  onMouseEnter={() => setItems(() => dropDowntypes.aboutUs)}
                >
                  About Us
                </li>
              </ul>
            </div>
          </nav>
          <DropDown items={items} />
        </div>
      </header>
    </>
  );
};

export default Navbar;
