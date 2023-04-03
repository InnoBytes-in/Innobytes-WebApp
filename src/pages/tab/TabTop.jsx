import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaArrowRight,
} from "react-icons/fa";

const TabTop = ({ tab, contactRef }) => {
  return (
    <div className="container h-screen bg-cyan-700">
      <img src={tab.bg} className="object-cover h-full w-full opacity-60" />
      <div className="absolute z-0 bottom-24 right-32 justify-center items-center">
        <h1
          className="text-6xl text-white font-bold px-14"
          style={{
            WebkitTextStroke: "1px black",
            MozTextStroke: "1px black",
            textStroke: "1px black",
          }}
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          {tab.name}
        </h1>
        <div
          className="flex items-center py-4 px-5"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          <div className="flex-grow h-1 bg-rose-500"></div>
        </div>
        <div
          className="flex justify-end items-center py-5 px-5"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          <div className="flex w-fit border-2 text-rose-500 border-white bg-white p-1 transition duration-500 ease-in-out hover:no-underline hover:bg-rose-500 hover:text-white hover:border-rose-500">
            <button
              onClick={() => {
                if (contactRef && contactRef.current) {
                  contactRef.current.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-2xl px-3 font-medium"
            >
              Get in touch
            </button>
            <FaArrowRight size="2rem" className="mt-1" />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <FaLinkedin size="4rem" />
        <FaFacebookSquare size="4rem" />
        <FaTwitterSquare size="4rem" />
      </div>
    </div>
  );
};

export default TabTop;
