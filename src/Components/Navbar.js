import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            <div>
              <img
                src={require("./logo.png")}
                alt="Company Logo"
                className="h-10"
              />
            </div>
            <div>
              <ul className="flex items-center">
                <li className="ml-6">
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    Home
                  </a>
                </li>
                <li className="ml-6">
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    About
                  </a>
                </li>
                <li className="ml-6">
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    Services
                  </a>
                </li>
                <li className="ml-6">
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
