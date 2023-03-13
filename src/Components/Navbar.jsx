import React from "react";
import { useState, useEffect } from "react";
import DropDown from "./DropDown";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  let [items, setItems] = useState("");

  return (
    <>
      <header
        className="bg-blend-screen shadow-md"
        onMouseLeave={() => setItems(() => "")}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center py-4">
            <Link to="/">
              <img
                src={logo}
                alt="Company Logo"
                className="h-16 cursor-pointer"
              />
            </Link>
            <div>
              <ul className="flex items-center ml-6">
                <li
                  className="mx-8 text-gray-600 hover:text-blue-500 cursor-pointer"
                  onMouseEnter={() => setItems(() => "insights")}
                >
                  Insights
                </li>
                <li
                  className="mx-8 text-gray-600 hover:text-blue-500 cursor-pointer"
                  onMouseEnter={() => setItems(() => "industries")}
                >
                  Industries
                </li>
                <li
                  className="mx-8 text-gray-600 hover:text-blue-500 cursor-pointer"
                  onMouseEnter={() => setItems(() => "services")}
                >
                  Services
                </li>
                <li
                  className="mx-8 text-gray-600 hover:text-blue-500 cursor-pointer"
                  onMouseEnter={() => setItems(() => "careers")}
                >
                  Careers
                </li>
                <li
                  className="mx-8 text-gray-600 hover:text-blue-500 cursor-pointer"
                  onMouseEnter={() => setItems(() => "aboutUs")}
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
