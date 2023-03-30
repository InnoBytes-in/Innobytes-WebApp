import React from "react";
import { useState, useEffect } from "react";
import DropDown from "./DropDown";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";

const Navbar = () => {
  let [items, setItems] = useState("");
  let [scroll, setScroll] = useState(false);

  const toggleAnimation = useSpring({
    opacity: items == "" ? 0 : 1,
    y: items == "" ? -10 : 0,
  });

  const scrollNavAnimation = useSpring({
    backgroundColor: scroll ? "#F43F5E" : "transparent",
    opacity: scroll ? 1 : 0.9,
    // color: scroll ? "white" : "black",
  });

  const changeBg = () => {
    if (window.scrollY > 100) setScroll(true);
    else setScroll(false);
    // console.log(window.scrollY);
  };

  window.addEventListener("scroll", changeBg);

  return (
    <>
      <animated.header
        className="fixed w-full bg-black text-white opacity-95 font-medium font-serif z-10 shadow-md"
        onMouseLeave={() => setItems(() => "")}
        onScroll={() => setScroll(true)}
        style={{ ...scrollNavAnimation }}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center py-4">
            <Link to="/">
              <img
                src={logo}
                alt="Company Logo"
                className="h-16 cursor-pointer"
                onMouseEnter={() => setItems("")}
              />
            </Link>
            <div>
              <ul className="flex items-center ml-6">
                <li
                  className="flex h-20 p-2 cursor-pointer items-center transition duration-500 ease-in-out hover:bg-cyan-700 hover:text-white"
                  onMouseEnter={() => setItems(() => "insights")}
                >
                  Insights
                </li>
                <li
                  className="flex h-20 p-2 w-10"
                  onMouseEnter={() => setItems("")}
                ></li>
                <li
                  className="flex h-20 p-2 cursor-pointer items-center transition duration-500 ease-in-out hover:bg-cyan-700 hover:text-white"
                  onMouseEnter={() => setItems(() => "industries")}
                >
                  Industries
                </li>
                <li
                  className="flex h-20 p-2 w-10"
                  onMouseEnter={() => setItems("")}
                ></li>
                <li
                  className="flex h-20  p-2 cursor-pointer items-center transition duration-500 ease-in-out hover:bg-cyan-700 hover:text-white"
                  onMouseEnter={() => setItems(() => "services")}
                >
                  Services
                </li>
                <li
                  className="flex h-20 p-2 w-10"
                  onMouseEnter={() => setItems("")}
                ></li>
                <li
                  className="flex h-20 p-2 cursor-pointer items-center transition duration-500 ease-in-out hover:bg-cyan-700 hover:text-white"
                  onMouseEnter={() => setItems(() => "careers")}
                >
                  Careers
                </li>
                <li
                  className="flex h-20 mx-8 p-2 cursor-pointer items-center transition duration-500 ease-in-out hover:bg-cyan-700 hover:text-white"
                  onMouseEnter={() => setItems(() => "aboutUs")}
                >
                  About Us
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <animated.div style={{ ...toggleAnimation }}>
          <DropDown items={items} />
        </animated.div>
      </animated.header>
    </>
  );
};

export default Navbar;
